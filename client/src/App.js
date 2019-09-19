import React, { useEffect } from 'react';

import { useAuth0 } from './auth-wrapper.js';
import { useDispatch, useSelector } from 'react-redux';

import Login from './components/Login.js';
import Loggedin from './components/Loggedin.js';
import PrivateRoute from './components/PrivateRoute.js';
import './App.scss';
import OnboardingForm from './components/OnboardingForm/OnboardingForm.js';
import { initUser } from './store/actions/usersActions.js';

function App() {
  const { isAuthenticated, loading, user } = useAuth0();
  const dispatch = useDispatch();

  //this is mapping state from the redux store to the binding 'onboarding'
  const { loggedIn, onboarding } = useSelector(state => state.users);

  // useEffect is working as a lifecycle method, it will run when 'user' or 'dispatch' are updated
  useEffect(() => {
    if (typeof user !== 'object') return;
    else {
      console.log('useEffect() user', user);
      dispatch(initUser(user));
    }
  }, [user, dispatch]);

  return (
    <div className="App">
      {loading && <div className="isLoading">Loading...</div>}
      {!loading && !isAuthenticated && <Login />}
      {onboarding && <OnboardingForm />}
      {loggedIn && <PrivateRoute path="/" component={Loggedin} />}
    </div>
  );
}

export default App;
