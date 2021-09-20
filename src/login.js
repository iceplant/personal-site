import React, { useState } from 'react';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
// import { Auth } from 'aws-amplify';

// async function signUp() {
//   try {
//       const { user } = await Auth.signUp({
//           username,
//           password,
//           attributes: {
//               email,          // optional
//               phone_number,   // optional - E.164 number convention
//               // other custom attributes 
//           }
//       });
//       console.log(user);
//   } catch (error) {
//       console.log('error signing up:', error);
//   }
// }


const LoginModal = () => {
  const [loginModalView, setLoginModalView] = useState('login');
  if (loginModalView == 'login') {
    return (
      <div>
        username
        password
      </div>
    );
  }
}


export default LoginModal;