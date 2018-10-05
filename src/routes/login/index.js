import { Component } from 'preact';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { inject, observer } from 'mobx-react';
import { route } from 'preact-router';
import routeMap from '../../config/routeMap';
import classnames from 'classnames';

import style from './login.scss';
import commonStyle from '../common.scss';

@inject('authStore')
@observer
class Login extends Component {

  handleSuccess = (response) => {
    const tokenID = response.tokenId;

    axios.post(`${process.env.PREACT_APP_API_URL}/api/v1/login`, {
      tokenID,
    })
      .then(response => {
        this.updateToken(response.data.token);
      })
      .catch(function (error) {
        return error;
      })
      .then(() => {
        route(routeMap.home);
      });
  };

  handleFailure = (response) => {
    console.log(response);
  };

  updateToken = (param) => {
    this.props.authStore.login(param);
  };

  componentDidMount () {
    if (this.props.authStore.isAuthenticated) {
      route(routeMap.home);
    }
  }

  render () {
    const appContainerClasses = classnames(commonStyle.appContainer, commonStyle.flexContainer);
    return (
      <div className={commonStyle.mainContainer}>
        <div className={appContainerClasses}>
          <GoogleLogin
            clientId="210802808654-con1ug567egbtnkjf70ha0det1qnlfnt.apps.googleusercontent.com"
            buttonText="Login with Google"
            scope="profile email"
            className="temp"
            onSuccess={this.handleSuccess}
            onFailure={this.handleFailure}
          />
        </div>
      </div>
    );
  }
}

export default Login;
