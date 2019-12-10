import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import moment from 'moment';

import Heatmap from './Heatmap.js';
// Assets
import defaultImg from '../../ASSETS/default_thumbnail.svg';
import empty from '../Icons/empty_project.svg';
import Loading from '../Loading';

class UserProfile_Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acceptedCollabProjects: [] //accepted collab projects
    };

  }//end constructor

  render() {
    const projects = this.props.projects;
    const recentProjects = this.props.recentProjects;
    const followers = this.props.followers;
    const following = this.props.following;
    const starred = this.props.starred;
    const acceptedProjects = this.props.acceptedCollabProjects;

    if (!this.props.isProjectsLoading) {

      return (
        <div className="profile-tabs-container">
          <div>
            <Tabs>
              <TabList className="nav-links">
                <Tab className="links" selectedClassName="active-link">
                  Overview
                </Tab>
                <Tab className="links" selectedClassName="active-link">
                  Projects
                </Tab>
                {/* COLLABORATIONS */}
                {(this.props.activeUser.id === this.props.userData.id) && (
                  <Tab className="links" selectedClassName="active-link">
                    Collaborations
                </Tab>
                )}
                <Tab className="links" selectedClassName="active-link">
                  Followers
                </Tab>
                <Tab className="links" selectedClassName="active-link">
                  Following
                </Tab>
                <Tab className="links" selectedClassName="active-link">
                  Starred
                </Tab>
              </TabList>

              <TabPanel className="tabs-container">
                <div className="tabs-header">
                  <h2>Recent Projects</h2> {/*RECENT PROJECTS*/}
                </div>
                <div className="tab-content">
                  {projects.length === 0 && (
                    <div className="empty-state">
                      <img src={empty} alt="empty" className="empty-icon" />
                      <h1 className="no-projects">
                        No projects have been created yet
                      </h1>
                    </div>
                  )}
                  <div className="projects-array">
                    {recentProjects !== null &&
                      recentProjects.map(project => (
                        <div className="project-content" key={project.id}>
                          <Link to={`/project/${project.id}`}>
                            <>
                              <div className="project-info">
                                {project.name.length > 35 ? (
                                  <h1>{project.name.slice(0, 35)}...</h1>
                                ) : (
                                    <h1>{project.name}</h1>
                                  )}
                                <h1 className="created">
                                  {moment(project.created_at).format(
                                    'MMM DD, YYYY'
                                  )}
                                </h1>
                              </div>
                              <img
                                src={
                                  project.mainImg ? project.mainImg : defaultImg
                                }
                                className="project-thumbnail"
                                alt="test"
                                key={project.id}
                              />
                            </>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>


                <Heatmap />
              </TabPanel>
              <TabPanel className="tabs-container">
                <div className="tabs-header">
                  <h2>Projects</h2>
                </div>
                <div className="tab-content">
                  {projects.length === 0 && (
                    <div className="empty-state">
                      <img src={empty} alt="empty" className="empty-icon" />
                      <h1 className="no-projects">
                        No projects have been created yet.
                      </h1>
                    </div>
                  )}
                  <div className="projects-array">
                    {projects.map(project => (
                      <div className="project-content" key={project.id}>
                        <Link to={`/project/${project.id}`}>
                          <>
                            <div className="project-info">
                              {project.name.length > 35 ? (
                                <h1>{project.name.slice(0, 35)}...</h1>
                              ) : (
                                  <h1>{project.name}</h1>
                                )}
                              <h1 className="created">
                                {moment(project.created_at).format(
                                  'MMM DD, YYYY'
                                )}
                              </h1>
                            </div>
                            <img
                              src={project.mainImg ? project.mainImg : defaultImg}
                              className="project-thumbnail"
                              alt="test"
                              key={project.id}
                            />
                          </>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </TabPanel>

              {/*ADDING COLLABORATORS */}
              {(this.props.activeUser.id === this.props.userData.id) && (

                <TabPanel className="tabs-container">
                  <div className="tabs-header">
                    <h2>Collaborations</h2>
                  </div>
                  <div className="tab-content">
                    {acceptedProjects.length === 0 && (
                      <div className="empty-state">
                        <img src={empty} alt="empty" className="empty-icon" />
                        <h1 className="no-projects">
                          You are not collaborating on any projects.
                      </h1>
                      </div>
                    )}
                    <div className="projects-array">

                      {acceptedProjects.map(project => (

                        <div className="project-content" key={project.id}>
                          <Link to={`/project/${project.id}`}>
                            <>
                              <div className="project-info">
                                {project.name.length > 35 ? (
                                  <h1>{project.name.slice(0, 35)}...</h1>
                                ) : (
                                    <h1>{project.name}</h1>
                                  )}
                                <h1 className="created">
                                  {moment(project.created_at).format(
                                    'MMM DD, YYYY'
                                  )}
                                </h1>
                              </div>
                              <img
                                src={project.mainImg ? project.mainImg : defaultImg}
                                className="project-thumbnail"
                                alt="test"
                                key={project.id}
                              />
                            </>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabPanel>

              )}

              <TabPanel className="tabs-container">
                <div className="follower-following-container">
                  {followers.length === 0 && (
                    <div className="empty-state">
                      <img src={empty} alt="empty" className="empty-icon" />
                      <h1 className="no-projects">
                        This user does not have any followers.
                    </h1>
                    </div>
                  )}
                  {followers.map(follower => {
                    let alsoFollowing = false;
                    following.map(following => {
                      if (following.userId === follower.userId) {
                        alsoFollowing = true;
                      }
                      return following;
                    });
                    return (
                      <div className="follow-container" key={follower.id}>
                        <div className="follow-info-flex">
                          <Link
                            to={`/profile/${follower.userId}/${follower.username}`}
                          >
                            <img
                              src={follower.avatar}
                              className="follow-avatar"
                              alt="avatar"
                            />
                          </Link>
                          <Link
                            to={`/profile/${follower.userId}/${follower.username}`}
                          >
                            <div className="follow-content">
                              <div className="follow-content-flex">
                                <h1 className="follow-FLname">{follower.name}</h1>
                                <h1 className="follow-username">
                                  {follower.username}
                                </h1>
                              </div>
                              <p className="follower-bio">{`${
                                follower.bio.length > 100
                                  ? follower.bio.slice(0, 100) + '...'
                                  : follower.bio
                                }`}</p>
                            </div>
                          </Link>
                        </div>
                        {this.props.activeUser.id ===
                          Number(this.props.params.id) ? (
                            !alsoFollowing ? (
                              <button
                                onClick={() =>
                                  this.props.followUser(
                                    this.props.activeUser.id,
                                    follower.userId,
                                    this.props.activeUser,
                                    this.props.params
                                  )
                                }
                                className="follow-btn"
                              >
                                Follow
                            </button>
                            ) : (
                                <button
                                  onClick={() =>
                                    this.props.unfollowUser(
                                      this.props.activeUser.id,
                                      follower.userId
                                    )
                                  }
                                  className="edit-profile-btn"
                                >
                                  Unfollow
                            </button>
                              )
                          ) : (
                            ''
                          )}
                      </div>
                    );
                  })}
                </div>
              </TabPanel>
              <TabPanel className="tabs-container">
                <div className="follower-following-container">
                  {following.length === 0 && (
                    <div className="empty-state">
                      <img src={empty} alt="empty" className="empty-icon" />
                      <h1 className="no-projects">
                        This user does not follow anyone.
                    </h1>
                    </div>
                  )}
                  {following.map(follower => (
                    <div className="follow-container" key={follower.id}>
                      <div className="follow-info-flex">
                        <Link
                          to={`/profile/${follower.userId}/${follower.username}`}
                        >
                          <img
                            src={follower.avatar}
                            className="follow-avatar"
                            alt="avatar"
                          />
                        </Link>
                        <div className="follow-content">
                          <div className="follow-content-flex">
                            <h1 className="follow-FLname">{follower.name}</h1>
                            <h1 className="follow-username">
                              {follower.username}
                            </h1>
                          </div>
                          <p className="follower-bio">
                            {`${
                              follower.bio.length > 100
                                ? follower.bio.slice(0, 100) + '...'
                                : follower.bio
                              }`}
                          </p>
                        </div>
                      </div>
                      {this.props.activeUser.id ===
                        Number(this.props.params.id) ? (
                          <button
                            onClick={() =>
                              this.props.unfollowUser(
                                this.props.activeUser.id,
                                follower.userId
                              )
                            }
                            className="edit-profile-btn"
                          >
                            Unfollow
                        </button>
                        ) : (
                          ''
                        )}
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel className="tabs-container">
                <div className="tabs-header">
                  <h2>Starred</h2>
                </div>
                <div className="tab-content">
                  {starred.length === 0 && (
                    <div className="empty-state">
                      <img src={empty} alt="empty" className="empty-icon" />
                      <h1 className="no-projects">No starred projects yet.</h1>
                    </div>
                  )}
                  <div className="projects-array">
                    {starred.map(project => (
                      <div className="project-content" key={project.id}>
                        <Link to={`/project/${project.projectId}`}>
                          <>
                            <div className="project-info">
                              {project.name.length > 35 ? (
                                <h1>{project.name.slice(0, 35)}...</h1>
                              ) : (
                                  <h1>{project.name}</h1>
                                )}
                              <h1 className="created">
                                {moment(project.created_at).format(
                                  'MMM DD, YYYY'
                                )}
                              </h1>
                            </div>
                            <img
                              src={project.img ? project.img : defaultImg}
                              className="project-thumbnail"
                              alt="test"
                              key={project.id}
                            />
                          </>
                        </Link>
                        <button className="follow-btn">Follow</button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      );
    }//end if
    else {
      return <Loading />; //diplay spinner while content is being fetched 
    }

  }//end render 

};//end class

export default UserProfile_Tabs;
