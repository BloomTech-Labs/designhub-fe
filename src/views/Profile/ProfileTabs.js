import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import moment from 'moment';
import { v4 } from 'uuid';
import Heatmap from './Heatmap.js';
// import {useQuery} from '@apollo/react-hooks';
// import { useParams } from 'react-router-dom';

// import {GET_USER_BY_ID_QUERY} from '../../graphql';

// Assets
import defaultImg from '../../ASSETS/default_thumbnail.svg';
import empty from '../../ASSETS/Icons/empty_project.svg';
// import Loading from '../../ASSETS/loading';
import ProjectThumbnail from '../Project/ProjectThumbnail';

const ProfileTabs = ({
  activeUser,
  userData,
  params,
  followUser,
  unfollowUser,
  currentTab,
  setCurrentTab,
  projects,
  acceptedProjects,
  followers,
  following,
  starred,
  users,
  ...rest
}) => {
  // const { id } = useParams()

  // state = {
  //   acceptedCollabProjects: [] //accepted collab projects

  // const projects = projects;
  const recentProjects = null;
  // const followers = this.followers;
  // const following = this.following;
  // const starred = this.starred;
  // const acceptedProjects = this.acceptedCollabProjects;

  // if (!this.isProjectsLoading) {
  console.log('USERS', activeUser);
  return (
    <div className="profile-tabs-container">
      <div className="new-tabs-div">
        <Tabs
          defaultIndex={0}
          selectedIndex={currentTab}
          onSelect={setCurrentTab}
        >
          <TabList className="nav-links">
            <Tab className="links" selectedClassName="active-link">
              Overview
            </Tab>
            <Tab className="links" selectedClassName="active-link">
              Projects
            </Tab>
            <Tab className="links" selectedClassName="active-link">
              Collaborations
            </Tab>
            <Tab className="links" selectedClassName="active-link">
              Followers
            </Tab>
            <Tab className="links" selectedClassName="active-link">
              Following
            </Tab>
            {/* <Tab className="links" id="starred" selectedClassName="active-link">
                  Starred
                </Tab> */}
          </TabList>

          <TabPanel className="tabs-container">
            <div className="tabs-header">
              <h2>Recent Projects</h2>
            </div>
            <div className="tab-content">
              {activeUser?.projects?.length === 0 && (
                <div className="empty-state">
                  <img src={empty} alt="empty" className="empty-icon" />
                  <h1 className="no-projects">
                    No projects have been created yet
                  </h1>
                </div>
              )}
              <div className="projects-array">
                {recentProjects !== null &&
                  recentProjects.map((project) => {
                    return (
                      <ProjectThumbnail
                        project={activeUser?.projects}
                        key={v4()}
                      />
                    );
                  })}
              </div>
            </div>

            <Heatmap />
          </TabPanel>

          <TabPanel className="tabs-container">
            <div className="tabs-header">
              <h2>Projects</h2>
            </div>
            <div className="tab-content">
              {activeUser?.projects?.length === 0 && (
                <div className="empty-state">
                  <img src={empty} alt="empty" className="empty-icon" />
                  <h1 className="no-projects">
                    No projects have been created yet.
                  </h1>
                </div>
              )}
              <div className="projects-array">
                {activeUser?.projects?.map((projectData) => {
                  // const user = activeUser?.projects;
                  // console.log('projects', projects)
                  // console.log('projectData', projectData)
                  // console.log('users',users)
                  console.log('activeUser', activeUser);
                  return (
                    <ProjectThumbnail
                      projectData={projectData}
                      user={activeUser}
                      key={projectData.id}
                    />
                  );
                })}
              </div>
            </div>
          </TabPanel>

          {/*ADDING COLLABORATORS */}
          <TabPanel className="tabs-container">
            <div className="tabs-header">
              <h2>Collaborations</h2>
            </div>
            <div className="tab-content">
              {/* {(activeUser?.id) && (activeUser?.projects.length === 0) && ( */}
              <div className="empty-state">
                <img src={empty} alt="empty" className="empty-icon" />
                <h1 className="no-projects">
                  You are not collaborating on any projects.
                </h1>
              </div>

              {/* 
              <div className="projects-array">
                {acceptedProjects?.map(project => {
                  return <ProjectThumbnail project={activeUser?.projects} key={v4()} />
                })}
              </div> */}
            </div>
          </TabPanel>

          <TabPanel className="tabs-container">
            <div className="tabs-header">
              <h2>Followers</h2>
            </div>

            <div className="tab-content">
              {followers?.length === 0 && (
                <div className="empty-state">
                  <img src={empty} alt="empty" className="empty-icon" />
                  <h1 className="no-projects">
                    This user does not have any followers.
                  </h1>
                </div>
              )}
              {followers?.map((follower) => {
                let alsoFollowing = false;
                following.map((following) => {
                  if (following?.userId === follower?.userId) {
                    alsoFollowing = true;
                  }
                  return following;
                });
                return (
                  <div className="follow-container" key={follower?.id}>
                    <div className="follow-info-flex">
                      <Link
                        to={`/profile/${follower?.userId}/${follower?.username}`}
                      >
                        <img
                          src={follower?.avatar}
                          className="follow-avatar"
                          alt="avatar"
                        />
                      </Link>
                      <Link
                        to={`/profile/${follower?.userId}/${follower?.username}`}
                      >
                        <div className="follow-content">
                          <div className="follow-content-flex">
                            <h1 className="follow-FLname">{follower?.name}</h1>
                            <h1 className="follow-username">
                              {follower?.username}
                            </h1>
                          </div>
                          <p className="follower-bio">{`${
                            follower?.bio.length > 100
                              ? follower?.bio.slice(0, 100) + '...'
                              : follower?.bio
                          }`}</p>
                        </div>
                      </Link>
                    </div>
                    {activeUser.id === Number(params.id) ? (
                      !alsoFollowing ? (
                        <button
                          onClick={() =>
                            followUser(
                              activeUser.id,
                              follower.userId,
                              activeUser,
                              params
                            )
                          }
                          className="follow-btn"
                        >
                          Follow
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            unfollowUser(activeUser.id, follower.userId)
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
            <div className="tabs-header">
              <h2>Following</h2>
            </div>

            <div className="tab-content">
              {followers?.length === 0 && (
                <div className="empty-state">
                  <img src={empty} alt="empty" className="empty-icon" />
                  <h1 className="no-projects">
                    This user does not follow anyone.
                  </h1>
                </div>
              )}
              {followers?.map((follower) => (
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
                        <h1 className="follow-FLname">{follower?.user.name}</h1>
                        <h1 className="follow-username">
                          {follower?.user.username}
                        </h1>
                      </div>
                      <p className="follower-bio">
                        {`${
                          follower?.bio.length > 100
                            ? follower.bio.slice(0, 100) + '...'
                            : follower.bio
                        }`}
                      </p>
                    </div>
                  </div>
                  {activeUser.id === Number(params.id) ? (
                    <button
                      onClick={() =>
                        unfollowUser(activeUser.id, follower.userId)
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
              {starred?.length === 0 && (
                <div className="empty-state">
                  <img src={empty} alt="empty" className="empty-icon" />
                  <h1 className="no-projects">No starred projects yet.</h1>
                </div>
              )}
              <div className="projects-array">
                {starred?.map((project) => (
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
                            {moment(project.created_at).format('MMM DD, YYYY')}
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
}; //end function

export default ProfileTabs;
