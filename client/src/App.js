import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { useAuth0 } from './auth-wrapper.js';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';
import TopBar from './components/TopBar.js';
import FakeProfile from './components/FakeProfile.js';
import OnboardingForm from './components/OnboardingForm.js';
import PrivateRoute from './components/PrivateRoute.js';
import UserProfile_LI from './components/UserProfile_LI.js';
import Project from './components/Project.js';
import './App.scss';
import ReduxTestComponent from './components/ReduxTestComponent.js';

function App(props) {
  const { isAuthenticated, loading } = useAuth0();

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return <Login />;
  else {
    return (
      <div className="App">
        <TopBar />
        <Navbar />
        <main className="workspace">
          <Switch>
            <Route exact path="/" component={UserProfile_LI} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/redux" component={ReduxTestComponent} />
            <PrivateRoute exact path="/onboard" component={OnboardingForm} />
            <PrivateRoute exact path="/fake-profile" component={FakeProfile} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
