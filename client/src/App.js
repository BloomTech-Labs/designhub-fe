import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';
import { useAuth0 } from './auth-wrapper.js';
import { useDispatch, useSelector } from 'react-redux';

import Loggedin from './components/Loggedin.js';
import PrivateRoute from './components/PrivateRoute.js';
import './App.scss';
import OnboardingForm from './components/OnboardingForm.js';
import { ONBOARD_START, INIT_USER } from './store/actions/usersActions.js';

function App() {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const { onboarding } = useSelector(state => state.users);
  useEffect(() => {
    const getUserData = async () => {
      if (typeof user !== 'object') return;
      try {
        const { id } = user;
        axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;
        const res = await axios.get(`api/v1/users/${id}`);
        // this object shape will change soon
        const [thisUser] = res.data.data;
        dispatch({ type: INIT_USER, payload: thisUser });
        console.log('App.js USE EFFECT res.data.data', thisUser);
        if (thisUser.username === null) {
          dispatch({ type: ONBOARD_START });
        }
      } catch (err) {
        console.log('App.js ERROR', err);
      }
    };
    getUserData();
  }, [user, dispatch]);

  return (
    <div className="App">
      {onboarding && <Redirect to="/onboard" />}
      <PrivateRoute path="/" component={Loggedin} />
      <PrivateRoute exact path="/onboard" component={OnboardingForm} />
    </div>
  );
}

export default App;
