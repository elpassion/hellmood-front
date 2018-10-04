import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import routeMap from './config/routeMap';

import Dashboard from './views/Dashboard';
import Calendar from './views/Calendar';
import MoodRating from './views/MoodRating';
import Settings from './views/Settings';
import {GoogleLogin} from 'react-google-login';
import { api } from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
    }
  }

  setToken = (token) => {
    if (token) {
      window.localStorage.setItem('tokenId', token);
    } else {
      window.localStorage.removeItem('tokenId');
    }
  };

  componentDidMount = () => {
    const tokenID = window.localStorage.getItem('tokenId');

    if (tokenID) {
      this.setState({
        isAuthenticated: true,
      });
    }
  };

  handleSuccess = (response) => {
    const tokenID = response.tokenId;

    console.log(response.tokenId);
    axios.post('http://8c5b4a25.ngrok.io/api/v1/login', {
      params: {
        tokenID
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
      });
  };

  handleFailure = () => {
    this.setState({
      isAuthenticated: false,
    });
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
        {isAuthenticated && (
          <Switch>
            <Route path={routeMap.home} exact component={Dashboard} />
            <Route path={routeMap.calendar_view} exact component={Calendar} />
            <Route path={routeMap.rate_your_mood} exact component={MoodRating} />
            <Route path={routeMap.settings} exact component={Settings} />
          </Switch>
        )}
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
