// ========== DEPENDENCIES ========== //
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';
import axios from 'axios';

// ========== IMPORTED COMPONENTS ========== //
import UserProfileTabs from './UserProfile_Tabs.js';
import Location from '../Icons/Location.js';
import WebsiteLink from '../Icons/Link.js';

import {
  getSingleUser,
  getFollowingCount,
  getFollowersCount,
  getProjectsByUser,
  getFollowers,
  getFollowing,
  getStarredProjects,
  getIsFollowed
} from '../../store/actions';

// ========== STYLES ========== //
import '../../SASS/UserProfile.scss';

class UserProfile_LI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: parseInt(this.props.match.params.id),
      myId: this.props.activeUser.id
    };
  }

  // API CALL FUNCTIONS TO RECEIVE USER'S PROFILE DATA

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    this.props
      .getSingleUser(this.props.match.params.id, this.props.activeUser.id)
      .then(() => {
        this.props.getFollowingCount(this.props.match.params.id);
      })
      .then(() => {
        this.props.getFollowersCount(this.props.match.params.id);
      })
      .then(() => {
        this.props.getProjectsByUser(this.props.match.params.id);
      })
      .then(() => {
        this.props.getFollowers(this.props.match.params.id);
      })
      .then(() => {
        this.props.getFollowing(this.props.match.params.id);
      })
      .then(() => {
        this.props.getStarredProjects(this.props.match.params.id);
      })
      .then(() => {
        this.props.getIsFollowed(this.props.activeUser.id, this.props.match.params.id);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      console.log('HDFKSFDhelooOOooOOOOOO')
      this.fetch();
    }
  }

  //sends follow notification to user you followed
  followNotification = (props, followId) => {
    const {
      activeUser: { username, id, avatar },
      match: { params }
    } = props;
    axiosWithAuth().post('api/v1/invite/follow', {
      activeUsername: username,
      invitedUserId: params.id,
      activeUserId: id,
      followersId: followId,
      activeUserAvatar: avatar,
      type: 'follow'
    });
  };

  followUser = () => {
    const followingObj = {
      followingId: this.state.myId,
      followedId: this.state.userId
    };
    return axiosWithAuth()
      .post('api/v1/followers', followingObj)
      .then(res => {
        this.followNotification(this.props, res.data.data[0].id);
      })
      .then(() => {
        return axiosWithAuth()
          .get(`api/v1/followers/count/followers/${this.state.userId}`)
          .then(res => {
            this.setState({ followers: res.data[0].count });
          });
      })
      .then(() => {
        return axiosWithAuth()
          .get(`api/v1/followers/${this.state.myId}/${this.state.userId}`)
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
          .get(`api/v1/followers/count/followers/${this.state.userId}`)
          .then(res => {
            this.setState({ followers: res.data[0].count });
          });
      })
      .then(() => {
        return axiosWithAuth()
          .get(`api/v1/followers/${this.state.myId}/${this.state.userId}`)
          .then(res => {
            this.setState({ isFollowed: res.data.isFollowed });
          });
      })
      .catch(err => console.log(err));
  };

  render() {
    window.scroll(0, 0);
    // if (this.state.userData.avatar === undefined) {
    //   return <div>Loading</div>;
    // }
    console.log('this.props.userData', this.props.userData);
    if (this.props.isUsersLoading && this.props.userData === null) {
      return <div>Loading...</div>;
    }
    return (
      <div className="user-profile-container">
        <div className="user-header">
          <div className="user-left-content">
            <img
              src={this.props.userData.avatar}
              className="avatar"
              alt="avatar"
            />
            <div className="user-info">
              <h1 className="userFLname">
                {this.props.userData.firstName} {this.props.userData.lastName}
              </h1>
              <h2 className="username">{this.props.userData.username}</h2>
              <p className="bio">{this.props.userData.bio}</p>
              <div className="user-info-location-website">
                <Location />
                <p>{this.props.userData.location}</p>
                <a
                  href={this.props.userData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="website"
                >
                  <WebsiteLink />
                  {this.props.userData.website}
                </a>
              </div>
            </div>
          </div>
          <div className="user-data-container">
            <div className="user-data">
              <div className="count-flex">
                <h6>Projects</h6>
                <p>
                  {this.props.projects === null
                    ? 0
                    : this.props.projects.length}
                </p>
              </div>
              <div className="count-flex">
                <h6>Followers</h6>
                <p>{this.props.followers ? this.props.followers : 0}</p>
              </div>
              <div className="count-flex">
                <h6>Following</h6>
                <p>{this.props.following ? this.props.following : 0}</p>
              </div>
              <div className="count-flex">
                <h6>Starred</h6>
                <p>
                  {this.props.starred === null ? 0 : this.props.starred.length}
                </p>
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
                {this.props.activeUser.id === this.state.userId ? (
                  <Link to="/settings">
                    <button className="edit-profile-btn">Edit Profile</button>
                  </Link>
                ) : (
                  <>
                    {this.props.isFollowed ? (
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
          projects={this.props.projects}
          followers={this.props.followersTab}
          following={this.props.followingTab}
          starred={this.props.starred}
          isFollowed={this.props.isFollowed}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    followers: state.followers.followersCount,
    following: state.followers.followingCount,
    followersTab: state.followers.followers,
    followingTab: state.followers.following,
    userData: state.users.singleUser,
    projects: state.projects.usersProjects,
    starred: state.stars.starredProjects,
    isFollowed: state.followers.isFollowed,
    isUsersLoading: state.users.isLoading
  };
};

export default connect(
  mapStateToProps,
  {
    getSingleUser,
    getFollowingCount,
    getFollowersCount,
    getProjectsByUser,
    getFollowers,
    getFollowing,
    getStarredProjects,
    getIsFollowed
  }
)(UserProfile_LI);
