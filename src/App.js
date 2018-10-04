import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import routeMap from './config/routeMap';

import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Calendar from './views/Calendar';
import MoodRating from './views/MoodRating';
import Settings from './views/Settings';
import ProtectedRoute from './components/ProtectedRoute';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route path={routeMap.login} exact component={Login} />
          <ProtectedRoute path={routeMap.home} exact component={Dashboard} />
          <ProtectedRoute path={routeMap.calendar_view} exact component={Calendar} />
          <ProtectedRoute path={routeMap.rate_your_mood} exact component={MoodRating} />
          <ProtectedRoute path={routeMap.settings} exact component={Settings} />
          <Route component={Login} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
