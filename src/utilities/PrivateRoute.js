import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from './auth-wrapper.js';
import LandingPage from '../views/LandingPage/LandingPage.js';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated } = useAuth0();

  const render = (props) =>
    isAuthenticated === true ? <Component {...props} /> : <LandingPage />;

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;
