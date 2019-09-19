import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { useAuth0 } from './auth-wrapper.js';
import { useDispatch, useSelector } from 'react-redux';

import Loggedin from './components/Loggedin.js';
import PrivateRoute from './components/PrivateRoute.js';
import './App.scss';
import OnboardingForm from './components/OnboardingForm.js';
import { initUser } from './store/actions/usersActions.js';

function App() {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const { isLoading, onboarding } = useSelector(state => state.users);
  useEffect(() => {
    if (typeof user !== 'object') return;
    else dispatch(initUser(user));
  }, [user, dispatch]);

  return (
    <div className="App">
      {onboarding && <Redirect to="/onboard" />}
      {isLoading && <div className="isLoading">Loading...</div>}
      <PrivateRoute path="/" component={Loggedin} />
      <PrivateRoute exact path="/onboard" component={OnboardingForm} />
    </div>
  );
}

export default App;
