import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { axiosWithAuth } from './utilities/axiosWithAuth.js';

import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Project from './components/Project';
import ProjectForm from './components/ProjectForm';
import PrivateRoute from './components/PrivateRoute';
import UserProfile_LI from './components/UserProfile_LI';

class DesignHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: []
    };
  }

  componentDidMount() {
    return axiosWithAuth()
      .get(`/api/v1/users/${this.props.user.id}`)
      .then(res => this.setState({ userInfo: res.data[0] }))
      .catch(err => console.log(err));
  }

  render() {
    const userInfo = this.state.userInfo;
    return (
      <div className="DesignHub">
        <TopBar />
        <Navbar userInfo={userInfo} />
        <main className="workspace">
          <Switch>
            <Route
              exact
              path="/profile/:username"
              render={props => (
                <UserProfile_LI {...props} userInfo={userInfo} />
              )}
            />
            <PrivateRoute exact path="/project/:id" component={Project} />
            <Route exact path="/create" component={ProjectForm} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default DesignHub;
