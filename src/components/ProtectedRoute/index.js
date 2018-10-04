import { Component } from 'preact';
import { inject } from 'mobx-react';
import { route } from 'preact-router';

@inject('authStore')
export default class ProtectedRoute extends Component {
  componentWillMount () {
    const { redirectPath, authStore: { user } } = this.props;

    if (!user) route(redirectPath || '/');
  }

  render ({ component: Route, ...props }) {
    const { authStore: { user } } = this.props;

    return user && <Route {...props} />;
  }
}
