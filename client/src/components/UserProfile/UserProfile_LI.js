// ========== DEPENDENCIES ========== //
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';
import axios from 'axios';
// ========== IMPORTED COMPONENTS ========== //
import UserProfileTabs from './UserProfile_Tabs.js';
// ========== STYLES ========== //
import '../../SASS/UserProfile.scss';
import Loading from '../Loading.js';

class UserProfile_LI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: [],
      following: [],
      userId: parseInt(this.props.match.params.id),
      userData: [],
      projects: [],
      followersTab: [],
      followingTab: [],
      starred: []
    };
  }

  // API CALL FUNCTIONS TO RECEIVE USER'S PROFILE DATA

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const paramsId = this.props.match.params.id;
    // const userId = this.state.userId;
    function getUserData(id) {
      return axiosWithAuth().get(`/api/v1/users/${id}`);
    }
    function getFollowingCount(id) {
      return axiosWithAuth().get(`/api/v1/followers/count/following/${id}`);
    }
    function getFollowerCount(id) {
      return axiosWithAuth().get(`/api/v1/followers/count/followers/${id}`);
    }
    function getUserProjects() {
      return axiosWithAuth().get(`api/v1/projects/recent/${paramsId}`);
    }
    function getFollowers() {
      return axiosWithAuth().get(`api/v1/followers/followers/${paramsId}`);
    }
    function getFollowing() {
      return axiosWithAuth().get(`api/v1/followers/following/${paramsId}`);
    }
    function getStarred() {
      return axiosWithAuth().get(`/api/v1/star/${paramsId}`);
    }

    return axios
      .all([
        getUserData(paramsId),
        getFollowingCount(paramsId),
        getFollowerCount(paramsId),
        getUserProjects(),
        getFollowers(paramsId),
        getFollowing(paramsId),
        getStarred(paramsId)
      ])
      .then(
        axios.spread((a, b, c, d, e, f, g) => {
          this.setState({
            userData: a.data[0],
            following: b.data[0].count,
            followers: c.data[0].count,
            projects: d.data,
            followersTab: e.data,
            followingTab: f.data,
            starred: g.data
          });
        })
      )
      .catch(err => err);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetch();
    }
  }

  render() {
    const userData = this.state.userData;
    const projects = this.state.projects;
    const activeUser = this.props.activeUser;
    window.scroll(0, 0);
    if (projects.length === 0) {
      return <Loading />;
    }
    return (
      <div className="user-profile-container">
        <div className="user-header">
          <div className="user-left-content">
            <img src={userData.avatar} className="avatar" alt="avatar" />
            <div className="user-info">
              <h1 className="userFLname">
                {userData.firstName} {userData.lastName}
              </h1>
              <h2 className="username">{userData.username}</h2>
              <p className="bio">{userData.bio}</p>
              <div className="user-info-location-website">
                <p>{userData.location}</p>
                <a
                  href={userData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="website"
                >
                  {userData.website}
                </a>
              </div>
            </div>
          </div>
          <div className="user-data-container">
            <div className="user-data">
              <div className="count-flex">
                <h6>Projects</h6>
                <p>{this.state.projects.length}</p>
              </div>
              <div className="count-flex">
                <h6>Followers</h6>
                <p>{this.state.followers}</p>
              </div>
              <div className="count-flex">
                <h6>Following</h6>
                <p>{this.state.following}</p>
              </div>
              <div className="count-flex">
                <h6>Starred</h6>
                <p>{this.state.starred.length}</p>
              </div>
            </div>
            <div className="teams-container">
              <div className="teams">
                {/* <h6>Teams</h6>
                {teams.teams.map(team => (
                  <img
                    key={team.avatar}
                    src={team.avatar}
                    className="team-avatar"
                    alt="team avatars"
                  />
                ))} */}
              </div>
              <div>
                {activeUser.id === this.state.userId ? (
                  <Link to="/settings">
                    <button className="edit-profile-btn">Edit Profile</button>
                  </Link>
                ) : (
                  <Link to="/settings">
                    <button className="follow-btn">Follow</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        <UserProfileTabs
          projects={projects}
          followers={this.state.followersTab}
          following={this.state.followingTab}
          starred={this.state.starred}
        />
      </div>
    );
  }
}

export default UserProfile_LI;
