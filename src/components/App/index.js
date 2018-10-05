import { Component } from 'preact';
import { Router } from 'preact-router';

import routeMap from '../../config/routeMap';

import Login from '../../routes/login';
import Home from '../../routes/home';
import RateYourDay from '../../routes/rateYourDay';

import Redirect from '../Redirect';
import ProtectedRoute from '../ProtectedRoute';

export default class App extends Component {
  render () {
    return (
      <Router>
        <Login path={routeMap.login} />
        <Redirect to={routeMap.login} default />
        <ProtectedRoute path={routeMap.home} component={Home} />
        <ProtectedRoute path={routeMap.rateYourDay} component={RateYourDay} />
      </Router>
    );
  }
};
