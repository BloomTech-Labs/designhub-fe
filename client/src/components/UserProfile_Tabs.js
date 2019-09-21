import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Heatmap from '../components/Heatmap.js';

class UserProfile_Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const projects = this.props.projects;
    const allUsers = null;
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
                <div className="projects-array">
                  {projects.slice(0, 8).map(project => (
                    <div className="project-content" key={project.id}>
                      <Link to={`/project/${project.id}`}>
                        <img
                          src={project.mainImg}
                          className="project-thumbnail"
                          alt="test"
                        />
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
                <div className="projects-array">
                  {projects.slice(0, 8).map(project => (
                    <img
                      src={project.mainImg}
                      className="project-thumbnail"
                      alt="test"
                      key={project.id}
                    />
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel className="tabs-container">
              <div className="follower-following-container">
                {allUsers &&
                  allUsers.map(follower => (
                    <div className="follow-container" key={follower.id}>
                      <div className="follow-info-flex">
                        <Link
                          to={`/profile/${follower.id}/${follower.username}`}
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
                {allUsers &&
                  allUsers.map(follower => (
                    <div className="follow-container" key={follower.avatar}>
                      <div className="follow-info-flex">
                        <img
                          src={follower.avatar}
                          className="follow-avatar"
                          alt="avatar"
                        />
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
                <div className="projects-array">
                  {projects.slice(0, 8).map(project => (
                    <img
                      key={project.mainImg}
                      src={project.mainImg}
                      className="project-thumbnail"
                      alt="test"
                    />
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
