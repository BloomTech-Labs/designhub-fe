import React from 'react';
import { useAuth0 } from '../../utilities/auth-spa';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage';
import Loading from '../Loading';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user, loading } = useAuth0();

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        // if user is logged in, send them to private route, else send them to the landing page to log in
        return user ? (
          <RouteComponent {...routeProps} />
        ) : !loading && !user ? (
          <LandingPage />
        ) : (
          <Loading />
        );
      }}
    />
  );
};

export default PrivateRoute;
