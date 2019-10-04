// ========== DEPENDENCIES ========== //
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';
import axios from 'axios';

// ========== IMPORTED COMPONENTS ========== //
import UserProfileTabs from './UserProfile_Tabs.js';
import Loading from '../Loading.js';
import Location from '../Icons/Location.js';
import WebsiteLink from '../Icons/Link.js';

// ========== STYLES ========== //
import '../../SASS/UserProfile.scss';

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
      starred: [],
      myId: this.props.activeUser.id,
      isFollowed: null
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
    function getFollowStatus(userId, myId) {
      return axiosWithAuth().get(`/api/v1/followers/${myId}/${userId}`);
    }

    return axios
      .all([
        getUserData(paramsId),
        getFollowingCount(paramsId),
        getFollowerCount(paramsId),
        getUserProjects(),
        getFollowers(paramsId),
        getFollowing(paramsId),
        getStarred(paramsId),
        getFollowStatus(this.state.userId, this.state.myId)
      ])
      .then(
        axios.spread((a, b, c, d, e, f, g, h) => {
          this.setState({
            userData: a.data[0],
            following: b.data[0].count,
            followers: c.data[0].count,
            projects: d.data,
            followersTab: e.data,
            followingTab: f.data,
            starred: g.data,
            isFollowed: h.data.isFollowed
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

  followUser = () => {
    const followingObj = {
      followingId: this.state.myId,
      followedId: this.state.userId
    };
    return axiosWithAuth()
      .post('api/v1/followers', followingObj)
      .then(res => {
        console.log(res.data);
      })
      .then(() => {
        return axiosWithAuth()
          .get(`/api/v1/followers/count/followers/${this.state.userId}`)
          .then(res => {
            this.setState({ followers: res.data[0].count });
          });
      })
      .then(() => {
        return axiosWithAuth()
          .get(`/api/v1/followers/${this.state.myId}/${this.state.userId}`)
          .then(res => {
            this.setState({ isFollowed: res.data.isFollowed });
          });
      })
      .catch(err => console.log(err));
  };

  unfollowUser = () => {
    const unFollowObj = {
      id: this.state.myId
    };
    axiosWithAuth()
      .post(`api/v1/followers/unfollow/${this.state.userId}`, unFollowObj)
      .then(res => {
        console.log(res.data);
      })
      .then(() => {
        return axiosWithAuth()
          .get(`/api/v1/followers/count/followers/${this.state.userId}`)
          .then(res => {
            this.setState({ followers: res.data[0].count });
          });
      })
      .then(() => {
        return axiosWithAuth()
          .get(`/api/v1/followers/${this.state.myId}/${this.state.userId}`)
          .then(res => {
            this.setState({ isFollowed: res.data.isFollowed });
          });
      })
      .catch(err => console.log(err));
  };

  render() {
    const userData = this.state.userData;
    const projects = this.state.projects;
    const activeUser = this.props.activeUser;
    window.scroll(0, 0);

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
                <Location />
                <p>{userData.location}</p>
                <a
                  href={userData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="website"
                >
                  <WebsiteLink />
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
                {activeUser.id == this.props.match.params.id ? (
                  <Link to="/settings">
                    <button className="edit-profile-btn">Edit Profile</button>
                  </Link>
                ) : (
                  <>
                    {this.state.isFollowed ? (
                      <button
                        className="edit-profile-btn"
                        onClick={this.unfollowUser}
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button className="follow-btn" onClick={this.followUser}>
                        Follow
                      </button>
                    )}
                  </>
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
          isFollowed={this.state.isFollowed}
        />
      </div>
    );
  }
}

export default UserProfile_LI;
