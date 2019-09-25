import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';

import Heatmap from './Heatmap.js';

import defaultImg from '../../ASSETS/default_thumbnail.svg';

class UserProfile_Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: []
    };
  }

  componentDidMount() {
    axios
      .get('https://designhubx-staging.herokuapp.com/api/v1/users')
      .then(res => this.setState({ allUsers: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    const projects = this.props.projects;
    const followers = this.props.followers;
    const following = this.props.following;
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
