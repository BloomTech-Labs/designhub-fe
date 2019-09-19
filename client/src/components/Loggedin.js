import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar.js';
import TopBar from './TopBar.js';
import FakeProfile from './FakeProfile.js';
import PrivateRoute from './PrivateRoute.js';
import UserProfile_LI from './UserProfile_LI.js';
import Project from './Project.js';
import ProjectForm from './ProjectForm.js';
import ReduxTestComponent from './ReduxTestComponent.js';
import '../App.scss';

function Loggedin(props) {
  return (
    <div className="Loggedin">
      <TopBar />
      <Navbar />
      <main className="workspace">
        <Switch>
          <Route exact path="/profile/:username" component={UserProfile_LI} />
          <PrivateRoute exact path="/project/:id" component={Project} />
          <Route exact path="/redux" component={ReduxTestComponent} />
          <Route exact path="/create" component={ProjectForm} />
          <PrivateRoute exact path="/fake-profile" component={FakeProfile} />
        </Switch>
      </main>
    </div>
  );
}

export default withRouter(Loggedin);
