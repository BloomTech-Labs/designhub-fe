import React, { Component } from 'react';

import Heatmap from './Heatmap.js';

import './SASS/UserProfile.scss';

import avatar from '../components/ASSETS/avatar.jpg';
import link from '../components/ASSETS/link.svg';
import map from '../components/ASSETS/map-pin.svg';
import UserProfile_Tabs from './UserProfile_Tabs';

class UserProfile_LI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const userInfo = {
      id: 1,
      username: 'eriklambert',
      email: 'eriklambert@gmail.com',
      phoneNumber: '888-555-0152',
      firstName: 'Erik',
      lastName: 'Lambert',
      location: 'Austin, TX',
      bio:
        'I love designing and always looking for ways to improve and innovate. 🤓 #Usersmatter! #LambdaBound #UXEngineer',
      website: 'https://eriklambert.io',
      avatar: avatar,
      created_at: 'June 11, 1997'
    };

    const projects = {
      user_id: 1,
      projects: [
        {
          project_id: 1,
          projectName: 'Landing Page Concept',
          starred: false
        },
        {
          project_id: 2,
          projectName: 'Daily UI 2 Onboard',
          starred: true
        }
      ]
    };

    const teams = {
      user_id: 1,
      teams: [
        {
          id: 1,
          username: 'Lambda School',
          avatar:
            'https://pbs.twimg.com/profile_images/1146473233895440384/p97lN1Jk_400x400.png'
        },
        {
          id: 2,
          username: 'Google',
          avatar: 'https://blog.hubspot.com/hubfs/image8-2.jpg'
        },
        {
          id: 3,
          username: 'Snapchat',
          avatar:
            'https://www.gannett-cdn.com/presto/2019/08/16/USAT/bd6538e4-5535-41ce-857b-518451c3a958-Snapchat_Logo_H.png?crop=2499,1406,x1,y56&width=3200&height=1680&fit=bounds'
        }
      ]
    };

    return (
      <div className="user-profile-container">
        <div className="user-header">
          <img src={userInfo.avatar} className="avatar" alt="avatar" />
          <div className="user-info">
            <h1 className="userFLname">
              {userInfo.firstName} {userInfo.lastName}
            </h1>
            <h2 className="username">{userInfo.username}</h2>
            <p className="bio">{userInfo.bio}</p>
            <div className="user-info-location-website">
              <p>{userInfo.location}</p>
              <p className="website">{userInfo.website}</p>
            </div>
          </div>
          <div className="user-data-container">
            <div className="user-data">
              <div className="count-flex">
                <h6>Projects</h6>
                <p>{projects.projects.length}</p>
              </div>
              <div className="count-flex">
                <h6>Followers</h6>
                <p>37</p>
              </div>
              <div className="count-flex">
                <h6>Following</h6>
                <p>1</p>
              </div>
              <div className="count-flex">
                <h6>Starred</h6>
                <p>143</p>
              </div>
            </div>
            <div className="teams-container">
              <div className="teams">
                <h6>Teams</h6>
                {teams.teams.map(team => (
                  <img
                    src={team.avatar}
                    className="team-avatar"
                    alt="team avatars"
                  />
                ))}
              </div>
              <div>
                <Link to="/">
                  <button className="edit-profile-btn">Edit Profile</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <UserProfile_Tabs />
        <Heatmap />
      </div>
    );
  }
}

export default UserProfile_LI;
