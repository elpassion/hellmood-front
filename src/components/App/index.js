import { Component } from 'preact';
import { Router } from 'preact-router';

import routeMap from '../../config/routeMap';

import Login from '../../routes/login';

import Redirect from '../Redirect';

export default class App extends Component {
  render () {
    return (
      <Router>
        <Login path={routeMap.login}ć />
        <Redirect to={routeMap.login} default />
      </Router>
    );
  }
};
