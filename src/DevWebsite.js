import "./DevWebsite.css";
import NavBar from "./nav-bar";

const DevWebsite = (props) => (
  <div>
    {/* <NavBar setPage={props.setPage}/>  */}
    <nav>
      <div class="navbar">
        <ul class="nav-list nav-list-right">
          <li class="nav-item">
            <a class="nav-item" href="#contact">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-item" href="#projects">
              {" "}
              Projects
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-item" href="#About">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <section id="welcome-section" class="section odd-section">
      <h1>Hi, I'm Rocky...</h1>
      <h3>Developer</h3>
      <h3>Movement Artist</h3>
      <h3>Researcher</h3>
    </section>
    <section id="About" class="section even-section">
      <h2 class="even-section">About</h2>
      <div class="even-section" id="text-columns">
        <p id="text-column" class="even-section">
          I'm a software engineer experienced in solving front-end and data
          science problems. I currently work for a devops contracting firm
          called Onzin Inc based in Oakland.{" "}
        </p>
        <p id="text-column" class="even-section">
          In previous lives, I was a contemporary dancer based in NYC, and a
          researcher with the Berkeley Cosmology Group.
        </p>
      </div>
    </section>

    <section id="projects" class="section odd-section">
      <u>Projects</u>
      <div id="project-tile-container">
        <div class="project-tile">
          <a
            href="https://codepen.io/iceplant/pen/xxOzGao"
            target="_blank"
            class="project-link"
            rel="noreferrer"
          >
            <span class="code">Meta Orbits in CSS</span>
          </a>
        </div>
        <div class="project-tile">
          <a
            href="www.thepeoplearetheplace.org"
            // target="_blank"
            class="project-link"
            rel="noreferrer"
          >
            <span class="code">The People Are The Place</span>
          </a>
        </div>
        <div class="project-tile">
          <a
            href="https://arxiv.org/abs/1802.08694"
            // target="_blank"
            class="project-link"
            rel="noreferrer"
          >
            <span class="code">Research on Neutrino Masses</span>
          </a>
        </div>
      </div>
    </section>

    <section id="contact" class="section even-section">
      <div id="contact-section-header" class="even-section">
        <h2 class="even-section">Contact</h2>
        <p class="even-section">Let's work together...</p>
        <hr />
      </div>

      <div id="contact-links" class="even-section">
        <a
          id="profile-link"
          href="https://github.com/iceplant"
          // target="_blank"
          class="btn contact-details even-section"
        >
          <i class="fab fa-github even-section"></i>
          GitHub
        </a>

        <a
          href="mailto:rockykamenrubio@gmail.com"
          class="btn contact-details even-section"
        >
          <i class="fas fa-at"></i>
          Email
        </a>
      </div>
    </section>
  </div>
);

export default DevWebsite;
