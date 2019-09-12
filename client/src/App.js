import React from 'react';
import './App.scss';
import UserProfile_LI from './components/UserProfile_LI';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from './auth-wrapper.js';
import './App.scss';
import Navbar from './components/Navbar.js';
import FakeProfile from './components/FakeProfile.js';
import PrivateRoute from './components/PrivateRoute.js';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/profile" component={UserProfile_LI} />
        <PrivateRoute exact path="/fake-profile" component={FakeProfile} />
      </Switch>
    </div>
  );
}

export default App;
