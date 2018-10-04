import { Component } from 'preact';
import { Router } from 'preact-router';

import routeMap from '../../config/routeMap';

import Login from '../../routes/login';

import Interested from '../../routes/interested';
import NoPlaceLeft from '../../routes/noplace';
import ProtectedRoute from '../ProtectedRoute';
import TooLate from '../../routes/toolate';
import Redirect from '../Redirect';

export default class App extends Component {
  render () {
    return (
      <Router>
        <Home path={routeMap.login} component={Login} />
        <ProtectedRoute path={routeMap.home} component={Interested} />
        <ProtectedRoute path={routeMap.rateYourDay} component={YourPlace} />
        <Redirect to={routeMap.login} default />
      </Router>
    );
  }
};
