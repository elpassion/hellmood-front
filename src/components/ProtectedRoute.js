import React  from 'react';
import { Route, Redirect } from 'react-router-dom';
import routeMap from "../config/routeMap";


const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    props.isAuthenticated
      ? <Component {...props} />
      : null
  )} />
);

export default ProtectedRoute;
