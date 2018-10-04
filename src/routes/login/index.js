import { Component } from 'preact';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
class Login extends Component {
  render () {
    const { authStore } = this.props;

    console.log(authStore);
    return (
      <div>
        SS
      </div>
    );
  }
}

export default Login;
