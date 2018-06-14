import React from 'react';
import FacebookLogin from 'react-facebook-login';

const fbResponse = response => {
  console.log(response);
};

const Auth = () => (
  <React.Fragment>
    <FacebookLogin
      appId={process.env.REACT_APP_FB_APP_ID}
      autoLoad
      fields="name, email, picture"
      callback={fbResponse}
    />
  </React.Fragment>
);

export default Auth;
