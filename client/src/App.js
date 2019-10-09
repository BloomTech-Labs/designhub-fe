import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useAuth0 } from './auth-wrapper.js';
import { axiosWithAuth } from './utilities/axiosWithAuth.js';

import DesignHub from './DesignHub.js';
import LandingPage from './components/LandingPage.js';
import OnboardingForm from './components/OnboardingForm/OnboardingForm.js';
import Loading from './components/Loading.js';

import { initUser } from './store/actions/usersActions.js';

import './App.scss';

function App({
  history,
  currentUser,
  isOnboarding,
  isLoggedIn,
  isLoading,
  initUser
}) {
  const { isAuthenticated, user, loading } = useAuth0();
  const [onboarding, setOnboarding] = useState(false);
  const [ready, setReady] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (typeof user === 'object') initUser(user);
  }, [user, onboarding, history]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {!isAuthenticated && <LandingPage />}
          <div className="App">
            {console.log('isOnboarding', isOnboarding)}
            {isOnboarding && <OnboardingForm />}
            {!isOnboarding && isLoggedIn && (
              <DesignHub setUserData={setUserData} user={userData} />
            )}
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
    isLoggedIn: state.users.loggedIn,
    isLoading: state.users.isLoading
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { initUser }
  )(App)
);
