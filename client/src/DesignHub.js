import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import axios from 'axios';

import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Project from './components/Project';
import PrivateRoute from './components/PrivateRoute';
import UserProfileLI from './components/UserProfile/UserProfile_LI';
import Settings from './components/Settings.js';
import AddProject from './components/AddProject';
import SearchPage from './components/SearchPage';
import Notifications from './components/Notifications';
import EditProject from './components/EditProject';
import Explore from './components/Explore/Explore';
import NewLandingPage from './components/NewLandingPage';

import './SASS/DesignHub.scss';

class DesignHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: this.props.user,
      search: [],
      searchTerm: ''
    };
  }
  componentDidMount() {
    if (this.props.history.location.pathname === '/') {
      const { id, username } = this.state.activeUser;
      this.props.history.push(`/profile/${id}/${username}`);
    }
  }

  getSearch = async (event, text, history) => {
    event.preventDefault();
    const {
      data: { projects, users }
    } = await axios.post(`${process.env.REACT_APP_BASE_URL}api/v1/search`, {
      searchText: text
    });
    this.setState({ search: { projects, users }, searchTerm: text });
    history.push('/search');
  };

  render() {
    return (
      <div className="DesignHub">
        <Route
          exact
          path="/newlandingpage"
          render={() =>(
            <NewLandingPage />
          )}
        />
        <Route
          path='/'
          render={props => (
            <TopBar
              {...props}
              searchData={this.state.search}
              getSearch={this.getSearch}
              activeUser={this.props.user}
            />
          )}
          />
        <div className="nav-workspace">
          <div>
            <span />
          </div>
          <div className="side-navigation">
            <Navbar activeUser={this.props.user} />
          </div>
          <main className="workspace">
            <Switch>
              <Route
                exact
                path="/profile/:id/:username"
                render={props => (
                  <UserProfileLI {...props} activeUser={this.props.user} />
                )}
              />
              <Route
                exact
                path="/notifications/:id/:username"
                render={props => (
                  <Notifications {...props} activeUser={this.props.user} />
                )}
              />
              <PrivateRoute
                exact
                path="/project/:id" 
                render={props => (
                  <Project {...props} activeUser={this.props.user} />
                )}
              />
              <Route
                exact
                path="/create"
                render={props => (
                  <AddProject {...props} activeUser={this.props.user} />
                )}
              />
              <Route
                exact
                path="/project/:id/edit"
                render={props => (
                  <EditProject {...props} activeUser={this.props.user} />
                )}
              />
              <Route
                path="/settings"
                render={props => (
                  <Settings {...props} activeUser={this.props.user} />
                )}
              />
              <Route
                exact
                path="/search"
                render={props => (
                  <SearchPage
                    {...props}
                    searchTerm={this.state.searchTerm}
                    activeUser={this.props.user}
                    searchData={this.state.search}
                    getSearch={this.getSearch}
                  />
                )}
              />
              <Route
                exact
                path="/explore"
                render={props => (
                  <Explore {...props} activeUser={this.props.user} />
                )}
              />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(DesignHub);
