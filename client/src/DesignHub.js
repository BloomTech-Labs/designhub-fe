import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { axiosWithAuth } from './utilities/axiosWithAuth.js';

import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Project from './components/Project';
import ProjectForm from './components/ProjectForm';
import PrivateRoute from './components/PrivateRoute';
import UserProfileLI from './components/UserProfile_LI';

class DesignHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: [],
      users: []
    };
  }

  componentDidMount() {
    return axiosWithAuth()
      .get(`/api/v1/users/${this.props.user.id}`)
      .then(res => this.setState({ activeUser: res.data[0] }))
      .catch(err => err);
  }

  render() {
    const activeUser = this.state.activeUser;
    return (
      <div className="DesignHub">
        <TopBar activeUser={activeUser} />
        <Navbar activeUser={activeUser} />
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
            <Route exact path="/create" component={ProjectForm} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default DesignHub;
