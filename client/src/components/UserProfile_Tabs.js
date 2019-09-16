import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Heatmap from './Heatmap.js';

import avatar2 from './ASSETS/avatar_2.jpg';
import avatar3 from './ASSETS/avatar_3.jpg';

class UserProfile_Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const projects = [
      {
        project_id: 1,
        thumbnail:
          'https://cdn.dribbble.com/users/182336/screenshots/7150621/media/b0a6aa5b2a19029479da7d91972b2774.png'
      },
      {
        project_id: 2,
        thumbnail:
          'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
      },
      {
        project_id: 3,
        thumbnail:
          'https://cdn.dribbble.com/users/3281732/screenshots/7150760/media/a11dae58a8eee44d242417ae6a6bed3c.jpg'
      },
      {
        project_id: 4,
        thumbnail:
          'https://cdn.dribbble.com/users/674925/screenshots/7147175/media/ca03b14f14639eddf76bd01174c9f2c5.png'
      },
      {
        project_id: 5,
        thumbnail:
          'https://cdn.dribbble.com/users/1430543/screenshots/7151173/media/c6109e2cedff65261c8a5f33ce618bba.jpg'
      },
      {
        project_id: 6,
        thumbnail:
          'https://cdn.dribbble.com/users/1312159/screenshots/7148680/image.png'
      },
      {
        project_id: 7,
        thumbnail:
          'https://cdn.dribbble.com/users/2151039/screenshots/7148065/media/2cf88366ac2a35660345ca8226a97085.png'
      },
      {
        project_id: 8,
        thumbnail:
          'https://cdn.dribbble.com/users/1160700/screenshots/7150660/media/610f9cc1a848c9ec6ba0121a4c569a9f.png'
      }
    ];

    const followers = [
      {
        id: 2,
        avatar: avatar2,
        username: 'mickymouse',
        firstName: 'Micky',
        lastName: 'Adams',
        bio:
          'Interested in what happens at the intersection of data, technology and design.',
        isFollowing: true
      },
      {
        id: 3,
        avatar: avatar3,
        username: 'biggorilla763',
        firstName: 'Wendy',
        lastName: 'Miles',
        bio:
          'UX Designer. Living my best life, creating experiences that puts a smile on faces. #Shining',
        isFollowing: false
      }
    ];

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
                    <img
                      src={project.thumbnail}
                      className="project-thumbnail"
                      alt="test"
                    />
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
                      src={project.thumbnail}
                      className="project-thumbnail"
                      alt="test"
                    />
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel className="tabs-container">
              <div className="follower-following-container">
                {followers.map(follower => (
                  <div className="follow-container">
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
              <div className="follower-following-container">
                {followers.map(follower => (
                  <div className="follow-container">
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
                      src={project.thumbnail}
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
