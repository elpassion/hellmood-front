import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
// import axios from 'axios';

// import routeMap from '../../config/routeMap';

class Login extends Component {

  componentDidMount () {}

  handleSuccess = (response) => {
    //response.tokenId
    console.log(response);
  };

  handleFailure = (response) => {
    console.log(response);
  };

  render() {
    return (
      <div>
        Login
        <br />
        <GoogleLogin
          clientId="210802808654-con1ug567egbtnkjf70ha0det1qnlfnt.apps.googleusercontent.com"
          buttonText="Login with Google"
          scope="profile email"
          className="STH"
          onSuccess={this.handleSuccess}
          onFailure={this.handleFailure}
        />
      </div>
    );
  }
}

export default Login;
