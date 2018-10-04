import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import routeMap from "../config/routeMap";

const fakeAuthCentralState = {
  isAuthenticated: false
};

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuthCentralState.isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{
        pathname: routeMap.login
      }} />
  )} />
);

export default ProtectedRoute;
