import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { useAuth0 } from './auth-wrapper.js';
import { axiosWithAuth } from './utilities/axiosWithAuth.js';

import DesignHub from './DesignHub.js';
import LandingPage from './components/LandingPage.js';
import OnboardingForm from './components/OnboardingForm/OnboardingForm.js';

import './App.scss';
import Loading from './components/Loading.js';

function App(props) {
  const { isAuthenticated, user, loading } = useAuth0();
  const [onboarding, setOnboarding] = useState(false);
  const [ready, setReady] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axiosWithAuth().post('api/v1/users/', user);
        const [userFromResponse] = res.data.user;
        setUserData(userFromResponse);
        const isOnboarding = userFromResponse.username === null ? true : false;
        if (isOnboarding) {
          setOnboarding(isOnboarding);
        } else {
          setReady(true);
        }
      } catch (err) {
        console.log('App.js useEffect() ERROR', err);
      }
    };
    if (typeof user === 'object') getUser();
  }, [user, onboarding, props.history]);


  return (
    <>
    { loading ? (
      <Loading />
    ) : (
      <>
      {!isAuthenticated && (
        <LandingPage />
      )}
      <div className="App">
        {onboarding && <OnboardingForm setOnboarding={setOnboarding} />}
        {!onboarding && ready && <DesignHub user={userData} />}
      </div>
      </>
    )}
    </>
  )
}

export default withRouter(App);
