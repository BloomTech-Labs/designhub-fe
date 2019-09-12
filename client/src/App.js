import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from './auth-wrapper.js';

import './App.css';
import UserProfile_LI from './components/UserProfile_LI';
import NavBar from './components/NavBar.js';
import FakeProfile from './components/FakeProfile.js';
import PrivateRoute from './components/PrivateRoute.js';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/profile" component={UserProfile_LI} />
        <PrivateRoute exact path="/fake-profile" component={FakeProfile} />
      </Switch>
    </div>
  );
}

export default App;
