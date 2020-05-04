import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useAuth0 } from './auth-wrapper.js';

import DesignHub from './DesignHub.js';
import LandingPage from './views/LandingPage/LandingPage.js';
// import NewLandingPage from './components/NewLandingPage';
import OnboardingForm from './views/OnboardingForm/OnboardingForm.js';
import Loading from './common/Loading.js';

import { initUser } from './store/actions/usersActions.js';

import './App.scss';

function App({ history, currentUser, isOnboarding, isLoggedIn, initUser }) {
  const { isAuthenticated, user, loading } = useAuth0();

  useEffect(() => {
    if (typeof user === 'object') initUser(user);
  }, [user, history, initUser]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {!isAuthenticated && <LandingPage />}
          <div className="App">
            {isOnboarding && <OnboardingForm />}
            {!isOnboarding && isLoggedIn && <DesignHub user={currentUser} />}
          </div>
        </>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser,
    isOnboarding: state.users.onboarding,
    isLoggedIn: state.users.loggedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { initUser }
  )(App)
);
