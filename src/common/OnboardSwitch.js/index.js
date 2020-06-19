import React from 'react';
import { useAuth0 } from '../../utilities/auth-spa';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage';
import Loading from '../Loading';
import Onboarding from '../../views/Onboarding/index';

const OnboardSwitch = ({ component: RouteComponent, ...rest }) => {
  
  const { loading, user } = useAuth0();

  //const onBoarding = user?.username === null || user?.username === '';

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        // if user is logged in, send them to private route, else send them to the landing page to log in
        return user ? !onBoarding (
          <RouteComponent {...routeProps} />
        ) :  user && onBoarding ? (
            <Onboarding {...routeProps} />
        ) : !loading && !user ? (
          <LandingPage />
        ) : (
          <Loading />
        );
      }}
    />
  );
};

export default OnboardSwitch;
