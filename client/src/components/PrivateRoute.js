import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from '../auth-wrapper.js';
import Login from './LandingPage.js/index.js';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated } = useAuth0();

  const render = props =>
    isAuthenticated === true ? <Component {...props} /> : <Login />;

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
