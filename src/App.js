import React from 'react';

import './App.scss';

import { Route } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';

import Explore from './views/Explore';
import CreateProject from './views/CreateProject';
import Profile from './views/Profile';
import Onboarding from './views/Onboarding';
import LandingPage from './common/LandingPage';
import Project from './views/Project';
import Settings from './views/Settings';
import Search from './views/Search';
import Notifications from './views/Notifications';

export default function App() {
  return (
    <>
      <div className="app-wrapper">
        <main className="workspace">
          <Route exact path="/" component={Explore} />
          <Route path="/landing" component={LandingPage} />
          <Route path="/onboarding" component={Onboarding} />
          <Route path="/profile/:username" component={Profile} />
          <Route path="/project/:id" component={Project} />
          <Route path="/search" component={Search} />
          <PrivateRoute path="/notifications" component={Notifications} />
          <PrivateRoute path="/create-project" component={CreateProject} />
          <PrivateRoute path="/settings" component={Settings} />
        </main>
      </div>
    </>
  );
}