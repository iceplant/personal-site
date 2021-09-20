import './DevWebsite.css'
import NavBar from './nav-bar';
import Modal from 'react-modal';
import React from 'react';
import { Auth } from 'aws-amplify';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);
Amplify.configure(aws_exports);

const signUpAsync = async (props) => {
  const { username, password, email, phone_number } = props
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email,          // optional
        phone_number,   // optional - E.164 number convention
        // other custom attributes 
      }
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

const signUp = props => {
  console.log('sign up props: ', props)
  signUpAsync(props);
}

async function confirmSignUp(props) {
  const { username, code } = props
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}

const signInAsync = async props => {
  const { username, password } = props;
  console.log("username: ", username)
  console.log("password: ", password)
  try {
    const user = await Auth.signIn(username, password);
    console.log(user)
  } catch (error) {
    console.log('error signing in', error);
  }
  console.log("currently logged in user: ", Auth.currentAuthenticatedUser())
}

const signIn = props => {
  console.log('sign in props: ', props)
  signInAsync(props)
}

async function signOut() {
  console.log('reached sign out')
  try {
    await Auth.signOut({ global: true });
  } catch (error) {
    console.log('error signing out: ', error);
  }
  console.log('success')
}

const DevWebsite = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalView, setModalView] = React.useState('login');
  const [currentUser, setCurrentUser] = React.useState('Not Logged In')

  Auth.currentAuthenticatedUser().then(user => setCurrentUser(user))

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const ModalContents = (props) => {
    const [loginValues, setLoginValues] = React.useState({
      username: '', password: ''
    });

    const setLogin = name => {
      return ({ target: { value } }) => {
        setLoginValues(oldValues => ({ ...oldValues, [name]: value }));
      }
    };

    const [signUpValues, setSignUpValues] = React.useState({
      username: '', password: '', name: '', email: ''
    });

    const setSignUp = name => {
      return ({ target: { value } }) => {
        setSignUpValues(oldValues => ({ ...oldValues, [name]: value }));
      }
    };

    const [verificationValues, setVerificationValues] = React.useState({
      username: '', code: ''
    });

    const setVerification = name => {
      return ({ target: { value } }) => {
        setVerificationValues(oldValues => ({ ...oldValues, [name]: value }));
      }
    };

    switch (props.modalView) {
      case 'signUp':
        return (
          <div>
            <div>
              <div>Sign Up</div>
              <label>
                Name:
                <input type="text" name="name" value={signUpValues.name} onChange={setSignUp('name')} />
              </label>
              <label>
                Email:
                <input type="text" name="name" value={signUpValues.email} onChange={setSignUp('email')} />
              </label>
              <label>
                Username:
                <input type="text" name="name" value={signUpValues.username} onChange={setSignUp('username')} />
              </label>
              <label>
                Password:
                <input type="text" name="name" value={signUpValues.password} onChange={setSignUp('password')} />
              </label>
              <button onClick={signUp({ username: signUpValues.username, password: signUpValues.password, attributes: { email: '', phone_number: '' } })} >Sign Up</button>
            </div>
            <div>
              <div>Confirm Sign Up with Verification Code</div>
              <label>
                Username:
                <input type="text" name="username" value={verificationValues.username} onChange={setVerification('username')} />
              </label>
              <label>
                Code:
                <input type="text" name="code" value={verificationValues.code} onChange={setVerification('code')} />
              </label>
              <button onClick={() => {
                console.log('verification code: ', verificationValues.code)
                confirmSignUp(verificationValues)
              }} >Verify</button>
            </div>
          </div >
        );
      default:
        return (
          <div>
            <div>Login</div>
            <form>
              <label>
                Username:
                <input type="text" name="name" value={loginValues.username} onChange={setLogin('username')} />
              </label>
              <label>
                Password:
                <input type="text" name="name" value={loginValues.password} onChange={setLogin('password')} />
              </label>
            </form>
            <button onClick={() => { signIn({ username: loginValues.username, password: loginValues.password }) }}>Login</button>
          </div >
        );
    }

  }

  return (
    <div>
      <NavBar setPage={props.setPage} openModal={openModal} currentUser={currentUser} />
      <nav>
        <div class='navbar'>
          <ul class='nav-list nav-list-right'>
            <li class='nav-item'>
              <a class='nav-item' href='#contact'>Contact</a>
            </li>
            <li class='nav-item'>
              <a class='nav-item' href='#projects'> Projects</a>
            </li>
            <li class='nav-item'>
              <a class='nav-item' href='#About' >About</a>
            </li>
          </ul>
        </div>
      </nav>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>Close</button>
        <button onClick={() => setModalView('logIn')}>
          Login
        </button>
        <button onClick={() => setModalView('signUp')}>
          Sign Up
        </button>
        <button onClick={signOut}>
          Sign Out
        </button>
        <ModalContents modalView={modalView} />
      </Modal>


      <section id='welcome-section' class='section odd-section'>
        <h1>Hi, I'm Rocky...</h1>
        <h3>Developer</h3>
        <h3>Movement Artist</h3>
        <h3>Researcher</h3>
      </section>
      <section id='About' class='section even-section'>
        <h2 class='even-section'>About</h2>
        <div class='even-section' id='text-columns'>
          <p id='text-column' class='even-section'>I'm a software engineer experienced in solving
            front-end and data science problems. I currently work for a devops contracting
            firm called Onzin Inc based in Oakland. </p>
          <p id='text-column' class='even-section'>In previous lives, I was
            a contemporary dancer based in NYC, and a researcher with the
            Berkeley Cosmology Group.</p>
        </div>
      </section>


      <section id='projects' class='section odd-section'>
        Projects
        <div id='project-tile-container'>
          <div class='project-tile'>
            <a
              href="https://codepen.io/iceplant/pen/xxOzGao"
              target="_blank"
              class="project-link"
            >
              {/* <img
            class="project-image"
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/tribute.jpg"
            alt="project"
          />  */}
              <p class="project-title">
                <span class="code">Meta Orbits in CSS</span>
              </p>
            </a>
          </div>
          <div class='project-tile'>Todo App</div>
          <div class='project-tile'>Market Analysis</div>
          <div class='project-tile'>Tax Code </div>
          <div class='project-tile'>Personal Blog</div>
          <div class='project-tile'>Research on Neutrio Masses</div>
          <div class='project-tile'>Automated Theorem Proving</div>
          <div class='project-tile'>Double Pendulum</div>
          <div class='project-tile'>GitHub-TickTick Ingestor</div>
        </div>
      </section>


      <section id='contact' class='section even-section'>

        <div id="contact-section-header" class='even-section'>
          <h2 class='even-section'>Contact</h2>
          <p class='even-section'>Let's work together...</p>
          <hr />
        </div>


        <div id="contact-links" class='even-section'>
          <a
            id="profile-link"
            href="https://github.com/iceplant"
            target="_blank"
            class="btn contact-details even-section">
            <i class="fab fa-github even-section"></i>
            GitHub
          </a>

          <a href="mailto:rockykamenrubio@gmail.com" class="btn contact-details even-section"
          ><i class="fas fa-at"></i>
            Email
          </a>
        </div>
      </section>
    </div>
  );
}

export default DevWebsite;