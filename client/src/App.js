import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { useAuth0 } from './auth-wrapper.js';
import { useDispatch, useSelector } from 'react-redux';

import Loggedin from './components/Loggedin.js';
import PrivateRoute from './components/PrivateRoute.js';
import './App.scss';
import OnboardingForm from './components/OnboardingForm.js';
import { initUser } from './store/actions/usersActions.js';
import Project from './components/Project.js';

function App() {
  const { user } = useAuth0();
  const dispatch = useDispatch();

  //this is mapping state from the redux store to the binding 'onboarding'
  const { onboarding } = useSelector(state => state.users);

  // useEffect is working as a lifecycle method, it will run when 'user' or 'dispatch' are updated
  useEffect(() => {
    if (typeof user !== 'object') return;
    else {
      console.log('useEffect() user', user);
      dispatch(initUser(user));
    }
  }, [user, dispatch]);

  const loggedInUser = useSelector(state => state.users.currentUser);

  return (
    <div className="App">
      {onboarding && <Redirect to="/onboard" />}
      {loggedInUser && (
        <PrivateRoute
          path={`/profile/${loggedInUser.username}`}
          component={Loggedin}
        />
      )}
      <PrivateRoute exact path="/" component={OnboardingForm} />
    </div>
  );
}

export default App;
