import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from './auth-wrapper.js';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';
import TopBar from './components/TopBar.js';
import FakeProfile from './components/FakeProfile.js';
import PrivateRoute from './components/PrivateRoute.js';
import UserProfile_LI from './components/UserProfile_LI';
import Project from './components/Project.js';
import './App.scss';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <Route exact path="/login" component={Login} />
      <main className="workspace">
        <Switch>
          <Route exact path="/profile" component={UserProfile_LI} />
          <Route exact path="/project" component={Project} />
          <PrivateRoute exact path="/fake-profile" component={FakeProfile} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
