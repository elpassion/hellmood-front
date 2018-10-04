import { Component } from 'preact';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
class Login extends Component {

  handleSuccess = (response) => {
    const tokenID = response.tokenId;

    console.log(response.tokenId);
    axios.post('http://8c5b4a25.ngrok.io/api/v1/login', {
      params: {
        tokenID
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
  };


  render () {
    return (
      <div>
        Login mordo <br />
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
