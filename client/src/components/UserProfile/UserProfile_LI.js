// ========== DEPENDENCIES ========== //
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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
  getIsFollowed,
  deleteFollow,
  addFollow,
  followNotification
} from '../../store/actions';

// ========== STYLES ========== //
import '../../SASS/UserProfile.scss';

class UserProfile_LI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        this.props.getIsFollowed(
          this.props.activeUser.id,
          this.props.match.params.id
        );
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      console.log('HDFKSFDhelooOOooOOOOOO');
      this.fetch();
    }
  }

  followUser = (yourId, theirID, activeUser, params) => {
    const followingObj = {
      followingId: yourId,
      followedId: theirID
    };
    this.props
      .addFollow(followingObj)
      .then(res => {
        this.props.followNotification(res.data.data[0].id, activeUser, params);
      })
      .then(() => {
        this.props.getFollowersCount(theirID);
        this.props.getFollowers(theirID);
        this.props.getFollowing(theirID);
      })
      .then(() => {
        this.props.getIsFollowed(yourId, theirID);
      })
      .catch(err => console.log(err));
  };

  unfollowUser = (yourId, theirId) => {
    console.log('yourId', yourId);
    console.log('theirId', theirId);
    const unFollowObj = {
      id: yourId
    };
    this.props
      .deleteFollow(theirId, unFollowObj)
      .then(() => {
        this.props.getFollowersCount(theirId);
        this.props.getFollowers(theirId);
        this.props.getFollowing(theirId);
      })
      .then(() => {
        this.props.getIsFollowed(yourId, theirId);
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
                <div className="location-website-flex">
                  {this.props.userData.location ? <Location /> : null}
                  <p className="location">{this.props.userData.location}</p>
                </div>
                <div className="location-website-flex">
                  <a
                    href={this.props.userData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="website"
                  >
                    {this.props.userData.website ? <WebsiteLink /> : null}
                    {this.props.userData.website}
                  </a>
                </div>
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
                {this.props.activeUser.id ===
                Number(this.props.match.params.id) ? (
                  <Link to="/settings">
                    <button className="edit-profile-btn">Edit Profile</button>
                  </Link>
                ) : (
                  <>
                    {this.props.isFollowed ? (
                      <button
                        className="edit-profile-btn"
                        onClick={() =>
                          this.unfollowUser(
                            this.props.activeUser.id,
                            parseInt(this.props.match.params.id)
                          )
                        }
                      >
                        Unfollow
                      </button>
                    ) : (
                      <button
                        className="follow-btn"
                        onClick={() =>
                          this.followUser(
                            this.props.activeUser.id,
                            parseInt(this.props.match.params.id),
                            this.props.activeUser,
                            this.props.match.params
                          )
                        }
                      >
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
          getIsFollowed={this.props.getIsFollowed}
          followUser={this.followUser}
          unfollowUser={this.unfollowUser}
          activeUser={this.props.activeUser}
          params={this.props.match.params}
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
    getIsFollowed,
    deleteFollow,
    addFollow,
    followNotification
  }
)(UserProfile_LI);
