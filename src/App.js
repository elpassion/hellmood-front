import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import routeMap from './config/routeMap';

import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Calendar from './views/Calendar';
import MoodRating from './views/MoodRating';
import Settings from './views/Settings';

const responseGoogle = (response) => {
  console.log(response);
}

class App extends Component {
  render() {
    return (
      <div>
      <GoogleLogin
        clientId="210802808654-con1ug567egbtnkjf70ha0det1qnlfnt.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      <BrowserRouter>
        <Switch>
          <Route path={routeMap.login} exact component={Login} />
          <Route path={routeMap.home} exact component={Dashboard} />
          <Route path={routeMap.calendar_view} exact component={Calendar} />
          <Route path={routeMap.rate_your_mood} exact component={MoodRating} />
          <Route path={routeMap.settings} exact component={Settings} />
          <Route component={Login} />
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
