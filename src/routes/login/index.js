import { Component } from 'preact';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
class Login extends Component {
  handleSuccess = (response) => {
    const tokenID = response.tokenId;

    axios.post(`${process.env.PREACT_APP_API_URL}/api/v1/login`, {
      params: {
        tokenID
      }
    })
      .then(response => {
        this.updateToken(tokenID);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
  };

  updateToken = (param) => {
    this.props.authStore.login(param);
  };


  render () {
    return (
      <div>
        <GoogleLogin
          clientId="210802808654-con1ug567egbtnkjf70ha0det1qnlfnt.apps.googleusercontent.com"
          buttonText="Login with Google"
          scope="profile email"
          className="temp"
          onSuccess={this.handleSuccess}
          onFailure={this.handleFailure}
        />
      </div>
    );
  }
}

export default Login;
