import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Project from './components/Project';
import PrivateRoute from './components/PrivateRoute';
import UserProfileLI from './components/UserProfile/UserProfile_LI';
import Settings from './components/Settings.js';
import AddProject from './components/AddProject';

import './SASS/DesignHub.scss';
import EditProject from './components/EditProject';

class DesignHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: this.props.user,
      users: []
    };
  }

  render() {
    const activeUser = this.state.activeUser;
    return (
      <div className="DesignHub">
        <TopBar
          activeUser={activeUser}
          darkMode={this.state.darkMode}
          toggleLightMode={this.toggleLightMode}
          togglDarkMode={this.togglDarkMode}
        />
        <div className="side-navigation">
          <Navbar activeUser={activeUser} />
        </div>
        <main className="workspace">
          <Switch>
            <Route
              exact
              path="/profile/:id/:username"
              render={props => (
                <UserProfileLI {...props} activeUser={activeUser} />
              )}
            />
            <PrivateRoute
              exact
              path="/project/:id"
              render={props => <Project {...props} activeUser={activeUser} />}
            />
            <Route exact path="/create" component={AddProject} />
            <Route
              exact
              path="/project/:id/edit"
              render={props => <EditProject {...props} />}
            />
            <Route
              exact
              path="/settings"
              render={props => <Settings {...props} activeUser={activeUser} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
  componentDidMount() {
    if (this.props.history.location.pathname === '/') {
      const { id, username } = this.state.activeUser;
      this.props.history.push(`/profile/${id}/${username}`);
    }
  }
}

export default withRouter(DesignHub);
