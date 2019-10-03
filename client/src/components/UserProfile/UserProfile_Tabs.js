import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Heatmap from './Heatmap.js';
// Assets
import defaultImg from '../../ASSETS/default_thumbnail.svg';
import empty from '../Icons/empty_project.svg';

class UserProfile_Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const projects = this.props.projects;
    const followers = this.props.followers;
    const following = this.props.following;
    const starred = this.props.starred;
    const isFollowed = this.props.isFollowed;

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
              <div className="tab-content">
                <h2>Recent Projects</h2>
                {projects.length === 0 && (
                  <div className="empty-state">
                    <img src={empty} alt="empty" className="empty-icon" />
                    <h1 className="no-projects">
                      No projects have been created yet
                    </h1>
                  </div>
                )}
                <div className="projects-array">
                  {projects.slice(0, 8).map(project => (
                    <div className="project-content" key={project.id}>
                      <Link to={`/project/${project.id}`}>
                        <>
                          <div className="project-info">
                            <h1>{project.name}</h1>
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
              <Heatmap />
            </TabPanel>
            <TabPanel className="tabs-container">
              <div className="tab-content">
                <h2>Projects</h2>
                {projects.length === 0 && (
                  <div className="empty-state">
                    <img src={empty} alt="empty" className="empty-icon" />
                    <h1 className="no-projects">
                      No created have been projects yet.
                    </h1>
                  </div>
                )}
                <div className="projects-array">
                  {projects.map(project => (
                    <div className="project-content" key={project.id}>
                      <Link to={`/project/${project.id}`}>
                        <>
                          <div className="project-info">
                            <h1>{project.name}</h1>
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
            <TabPanel className="tabs-container">
              <div className="follower-following-container">
                {followers.map(follower => (
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
                          <h1 className="follow-FLname">
                            {follower.firstName} {follower.lastName}
                          </h1>
                          <h1 className="follow-username">
                            {follower.username}
                          </h1>
                        </div>
                        <p className="follower-bio">{follower.bio}</p>
                      </div>
                    </div>
                    <button className="follow-btn">Follow</button>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel className="tabs-container">
              <div className="follower-following-container">
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
                          <h1 className="follow-FLname">
                            {follower.firstName} {follower.lastName}
                          </h1>
                          <h1 className="follow-username">
                            {follower.username}
                          </h1>
                        </div>
                        <p className="follower-bio">{follower.bio}</p>
                      </div>
                    </div>
                    <button className="follow-btn">Follow</button>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel className="tabs-container">
              <div className="tab-content">
                <h2>Starred</h2>
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
                            <h1>{project.name}</h1>
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
  }
}

export default UserProfile_Tabs;
