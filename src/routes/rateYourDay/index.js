import { Component } from 'preact';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
class RateYourDay extends Component {

  render () {
    return (
      <div>
        HOME
      </div>
    );
  }
}

export default RateYourDay;
