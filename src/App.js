import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import routeMap from './config/routeMap';

import Dashboard from './views/Dashboard';
import Calendar from './views/Calendar';
import MoodRating from './views/MoodRating';
import Settings from './views/Settings';
import ProtectedRoute from './components/ProtectedRoute';
import {GoogleLogin} from 'react-google-login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
    }
  }

  handleSuccess = (response) => {
    if (response.tokenId) {
      this.setState({
        isAuthenticated: true,
      })
    }
  };

  handleFailure = (response) => {
    console.log(response);
  };

  render() {
    const { isAuthenticated } = this.state;
    return (
      <div>
        {!isAuthenticated && (
          <GoogleLogin
            clientId="210802808654-con1ug567egbtnkjf70ha0det1qnlfnt.apps.googleusercontent.com"
            buttonText="Login with Google"
            scope="profile email"
            className="STH"
            onSuccess={this.handleSuccess}
            onFailure={this.handleFailure}
          />
        )}
      <BrowserRouter>
        <Switch>
          <ProtectedRoute path={routeMap.home} isAuthenticated={isAuthenticated} exact component={Dashboard} />
          <ProtectedRoute path={routeMap.calendar_view} isAuthenticated={isAuthenticated} exact component={Calendar} />
          <ProtectedRoute path={routeMap.rate_your_mood} isAuthenticated={isAuthenticated} exact component={MoodRating} />
          <ProtectedRoute path={routeMap.settings} isAuthenticated={isAuthenticated} exact component={Settings} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
