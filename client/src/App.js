import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from './auth-wrapper.js';

import './App.css';
import UserProfile_LI from './components/UserProfile_LI';
import NavBar from './components/NavBar.js';
import FakeProfile from './components/FakeProfile.js';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" />
      <Route exact path="/profile" component={UserProfile_LI} />
      <Route exact path="/fake-profile" component={FakeProfile} />
    </div>
  );
}

export default App;
