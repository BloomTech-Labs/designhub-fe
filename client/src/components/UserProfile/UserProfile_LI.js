// ========== DEPENDENCIES ========== //
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// ========== IMPORTED COMPONENTS ========== //
import UserProfileTabs from './UserProfile_Tabs.js';
import Location from '../Icons/Location.js';
import WebsiteLink from '../Icons/Link.js';
import Loading from '../Loading.js';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';


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
  followNotification,
  getRecentProjectsByUser,
  getInvitesByUser, //collab
  getSingleProject //collab
} from '../../store/actions';

// ========== STYLES ========== //
import '../../SASS/UserProfile.scss';

const holder = [];

class UserProfile_LI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acceptedCollabInvites: [], //accepted collab invites
      acceptedCollabProjects: [],//accepted collab projects
      currentTab: 0,              // Current selected tab in sub-navigation
      usersId: [],
      users: []
    };
  }



  setCurrentTab(tabIndex) {
    this.setState({ currentTab: tabIndex });
  }

  // API CALL FUNCTIONS TO RECEIVE USER'S PROFILE DATA

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    this.props.getInvitesByUser() //collab
      .then(() => {
        this.getAcceptedCollabInvites()
      })
      .then(() => {
        this.props.getSingleUser(this.props.match.params.id, this.props.activeUser.id)
      })
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
        this.props.getRecentProjectsByUser(this.props.match.params.id);
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
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetch();
    }

    if (this.state.usersId.length > 0 && this.state.users.length === 0) {
      const users = []
      this.state.usersId.map((id, index) => {
        return axiosWithAuth()
          .get(`/api/v1/users/${id}`)
          .then(res => {
            users.push(res.data[0]);
            if (index + 1 === this.state.usersId.length) {
              this.setState({ users: [...users, this.props.activeUser] });
            }
          })
      })
    }
  }

  followUser = (yourId, theirId, activeUser, params) => {
    const followingObj = {
      followingId: yourId,
      followedId: theirId
    };
    this.props
      .addFollow(followingObj)
      .then(res => {
        if (
          Number(this.props.match.params.id) ===
          Number(this.props.activeUser.id)
        ) {
          this.props.followNotification(
            res.data.data[0].id,
            activeUser,
            theirId
          );
        } else {
          this.props.followNotification(
            res.data.data[0].id,
            activeUser,
            params.id
          );
        }
      })
      .then(() => {
        if (
          Number(this.props.match.params.id) ===
          Number(this.props.activeUser.id)
        ) {
          this.props.getFollowersCount(yourId);
          this.props.getFollowers(yourId);
          this.props.getFollowing(yourId);
        } else {
          this.props.getFollowersCount(theirId);
          this.props.getFollowers(theirId);
          this.props.getFollowing(theirId);
        }
      })
      .then(() => {
        this.props.getIsFollowed(yourId, theirId);
      })
      .catch(err => console.log(err));
  };

  unfollowUser = (yourId, theirId) => {
    const unFollowObj = {
      id: yourId
    };
    this.props
      .deleteFollow(theirId, unFollowObj)
      .then(() => {
        if (
          Number(this.props.match.params.id) ===
          Number(this.props.activeUser.id)
        ) {
          this.props.getFollowersCount(yourId);
          this.props.getFollowers(yourId);
          this.props.getFollowing(yourId);
        } else {
          this.props.getFollowersCount(theirId);
          this.props.getFollowers(theirId);
          this.props.getFollowing(theirId);
        }
      })
      .then(() => {
        this.props.getIsFollowed(yourId, theirId);
      })
      .catch(err => console.log(err));
  };

  //get accepted collaboration invites
  getAcceptedCollabInvites = () => {
    const invites = this.props.userInvites.filter(invite => invite.pending === false);
    this.setState({
      acceptedCollabInvites: invites,
      acceptedCollabProjects: []
    })

    this.state.acceptedCollabInvites.map((invite, index) => {
      return this.props.getSingleProject(invite.projectId)
        .then(() =>
          this.setState({
            acceptedCollabProjects: [...this.state.acceptedCollabProjects, this.props.singleProject]
          }))
        .then(() => {
          const proj = holder.find(id => this.props.singleProject.userId === id);
          return proj ? null : holder.push(this.props.singleProject.userId);
        })
        .then(() => {
          if (this.state.acceptedCollabInvites.length - 1 === index) {
            this.setState({
              usersId: holder
            })
          }
        })
    });




  }

  render() {
    if (this.props.isUsersLoading && this.props.userData === null) {
      return <Loading />;
    }
    window.scroll(0, 0);
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
              {this.props.userData.location ?
                <div className="location-website-flex">
                  <Location />
                  <p className="location">{this.props.userData.location}</p>
                </div>
                 : null}
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
              <div className="count-flex" onClick={() => this.setCurrentTab(1)}>
                <h6>Projects</h6>
                <p>
                  {this.props.projects === null
                    ? 0
                    : this.props.projects.length}
                </p>
              </div>

              {/*NUMBER OF COLLABORATION PROJECTS*/}
              {(this.props.activeUser.id === this.props.userData.id) && (
                <div className="count-flex" onClick={() => this.setCurrentTab(1)}>
                  <h6>Collaborations </h6>
                  <p>{this.state.acceptedCollabInvites ? this.state.acceptedCollabInvites.length : 0}</p>
                </div>

              )}

              <div className="count-flex" onClick={() => this.setCurrentTab(2)}>
                <h6>Followers</h6>
                <p>{this.props.followers ? this.props.followers : 0}</p>
              </div>
              <div className="count-flex" onClick={() => this.setCurrentTab(3)}>
                <h6>Following</h6>
                <p>{this.props.following ? this.props.following : 0}</p>
              </div>
              <div className="count-flex" onClick={() => this.setCurrentTab(4)}>
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
          currentTab={this.state.currentTab}
          setCurrentTab={this.setCurrentTab.bind(this)}
          projects={this.props.projects}
          recentProjects={this.props.recentProjects}
          followers={this.props.followersTab}
          following={this.props.followingTab}
          starred={this.props.starred}
          isFollowed={this.props.isFollowed}
          getIsFollowed={this.props.getIsFollowed}
          followUser={this.followUser}
          unfollowUser={this.unfollowUser}
          activeUser={this.props.activeUser}
          params={this.props.match.params}
          isProjectsLoading={this.props.isProjectsLoading}
          acceptedCollabInvites={this.state.acceptedCollabInvites} //accepted collab invites  
          getSingleProject={this.props.getSingleProject}   //collab
          singleProject={this.props.singleProject} //collab     
          acceptedCollabProjects={this.state.acceptedCollabProjects}
          userData={this.props.userData}
          collabUsers={this.state.users}
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
    recentProjects: state.projects.usersRecentProjects,
    starred: state.stars.starredProjects,
    isFollowed: state.followers.isFollowed,
    isUsersLoading: state.users.isLoading,
    isProjectsLoading: state.projects.isLoading,
    userInvites: state.invites.userInvites, //collab - all project invites by user id
    singleProject: state.projects.singleProject

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
    followNotification,
    getRecentProjectsByUser,
    getInvitesByUser, //collab - gets all projects by user id
    getSingleProject //collab - gets a project by project id
  }
)(UserProfile_LI);
