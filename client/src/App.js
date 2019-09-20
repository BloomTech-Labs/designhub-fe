import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { useAuth0 } from './auth-wrapper.js';
import { useDispatch, useSelector } from 'react-redux';
import { initUser } from './store/actions/usersActions.js';

import Login from './components/Login.js';
import Loggedin from './components/Loggedin.js';
import PrivateRoute from './components/PrivateRoute.js';
import OnboardingForm from './components/OnboardingForm/OnboardingForm.js';
import './App.scss';

function App() {
  const { isAuthenticated, loading, user } = useAuth0();
  const dispatch = useDispatch();

  //this is mapping state from the redux store to the binding 'onboarding'
  const { loggedIn, onboarding } = useSelector(state => state.users);

  // useEffect is working as a lifecycle method, it will run when 'user' or 'dispatch' are updated
  useEffect(() => {
    if (typeof user !== 'object') return;
    else {
      console.log('App.js useEffect() user', user);
      dispatch(initUser(user));
    }
  }, [user, dispatch]);

  const loggedInUser = useSelector(state => state.users.currentUser);
  if (onboarding) return <OnboardingForm />;
  else if (!loading && !isAuthenticated) return <Login />;
  else
    return (
      <div className="App">
        {loading && <Loading />}
        {loggedIn && <PrivateRoute path="/" component={Loggedin} />}
        {loggedInUser && loggedInUser.username !== null && (
          <Redirect to={`/profile/${loggedInUser.username}`} />
        )}
        <PrivateRoute path="/onboard" component={OnboardingForm} />
      </div>
    );
}

export default App;

const Loading = () => {
  return (
    <div className="isLoading">
      DESIGN<em>HUB</em>
    </div>
  );
};
