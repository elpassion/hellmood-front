import { Component } from 'preact';
import { inject } from 'mobx-react';
import { route } from 'preact-router';

@inject('authStore')
export default class ProtectedRoute extends Component {
  componentWillMount () {
    const { redirectPath, authStore: { isAuthenticated } } = this.props;

    if (!isAuthenticated) route(redirectPath || '/');
  }

  render ({ component: Route, ...props }) {
    const { authStore: { isAuthenticated } } = this.props;

    return isAuthenticated && <Route {...props} />;
  }
}
