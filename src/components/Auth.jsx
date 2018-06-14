import React from 'react';
import FacebookLogin from 'react-facebook-login';

const fbResponse = response => {
  const url = `${process.env.REACT_APP_API_URL}login/facebook`;
  const body = JSON.stringify(response);

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  })
    .then(res => res.json())
    .then(json => console.log(json));
};

const Auth = () => (
  <React.Fragment>
    <FacebookLogin
      appId={process.env.REACT_APP_FB_APP_ID}
      autoLoad={false}
      fields="name, email, picture"
      callback={fbResponse}
    />
  </React.Fragment>
);

export default Auth;
