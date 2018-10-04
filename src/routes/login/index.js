/* eslint no-undef: 0 no-console: 0 */
import { Component } from 'preact';
import { inject, observer } from 'mobx-react';
import Button from '../../components/Button';
import BackCar from '../../components/Svg/BackCar';
import FrontCar from '../../components/Svg/FrontCar';
import Logotype from '../../components/Svg/Logotype';
import routeMap from '../../config/routeMap';

import style from './style.scss';

@inject('authStore')
@observer
class Login extends Component {
  componentDidMount = () => {
    const { authStore } = this.props;
    if (authStore.user) {
      authStore.initialUserRedirect();
    }
  }

  googleSignIn = (e) => {
    const { authStore } = this.props;
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '182832041414-bqv4iaaso8q2oo342i71ftf5uugi3cs7.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      })
      .then((auth2) => {
        auth2.signIn()
          .then((googleUser) => {
                authStore.login({ access_token: googleUser.Zi.access_token });
              }, (error) => {
                console.log(error, undefined, 2);
              });
      });
    });
  }

  render () {
    return (
      <div className={style.splashWrapper}>
        SS
      </div>
    );
  }
}

export default Login;
