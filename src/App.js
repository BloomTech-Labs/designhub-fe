import React from 'react';

import './App.scss';

import { Route } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';

import Explore from './views/Explore';
import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import Onboarding from './views/Onboarding';
import Project from './views/Project';
import Settings from './views/Settings';

export default function App() {
  return (
    <div className="app-wrapper">
      <Route exact path="/" component={Explore} />
      <Route path="/onboarding" component={Onboarding} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile/:username" component={Profile} />
      <Route path="/project/:id" component={Project} />
      <PrivateRoute path="/settings" component={Settings} />
    </div>
  );
}
