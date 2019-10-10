import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Project from './components/Project';
import PrivateRoute from './components/PrivateRoute';
import UserProfileLI from './components/UserProfile/UserProfile_LI';
import Settings from './components/Settings.js';
import AddProject from './components/AddProject';
import SearchPage from './components/SearchPage';
import Notifications from './components/Notifications';
import axios from 'axios';
import './SASS/DesignHub.scss';
import EditProject from './components/EditProject';
import Explore from './components/Explore/Explore';

class DesignHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: this.props.user,
      users: [],
      search: []
    };
  }

  getSearch = async (event, text, history) => {
    event.preventDefault();
    const {
      data: { projects, users }
    } = await axios.post(`${process.env.REACT_APP_BASE_URL}api/v1/search`, {
      searchText: text
    });
    this.setState({ search: { projects, users } });
    history.push('/search');
  };

  render() {
    const activeUser = this.state.activeUser;
    return (
      <div className="DesignHub">
        <TopBar
          searchData={this.state.search}
          getSearch={this.getSearch}
          activeUser={activeUser}
          darkMode={this.state.darkMode}
          toggleLightMode={this.toggleLightMode}
          togglDarkMode={this.togglDarkMode}
        />
        <div className="nav-workspace">
          <div>
            <span />
          </div>
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
              <Route
                exact
                path="/notifications/:id/:username"
                render={props => (
                  <Notifications {...props} activeUser={activeUser} />
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
                render={props => (
                  <Settings
                    setUserData={this.props.setUserData}
                    {...props}
                    activeUser={activeUser}
                  />
                )}
              />
              <Route
                exact
                path="/search"
                render={props => (
                  <SearchPage
                    {...props}
                    activeUser={activeUser}
                    searchData={this.state.search}
                    getSearch={this.getSearch}
                  />
                )}
              />
              <Route
                exact
                path="/explore"
                render={props => <Explore {...props} activeUser={activeUser} />}
              />
            </Switch>
          </main>
        </div>
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
