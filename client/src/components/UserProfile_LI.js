import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useSelector } from 'react-redux';

import '../SASS/UserProfile.scss';

import avatar from '../ASSETS/avatar.jpg';
// import link from '../ASSETS/link.svg';
// import map from '../ASSETS/map-pin.svg';
import UserProfileTabs from './UserProfile_Tabs';

const UserProfile_LI = () => {
  const loggedInUser = useSelector(state => state.users.currentUser);
  console.log(loggedInUser);

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
        <img
          src="https://mbevivino.files.wordpress.com/2011/08/silhouette_default.jpg"
          className="avatar"
          alt="avatar"
        />
        <div className="user-info">
          <h1 className="userFLname">
            {loggedInUser.firstName} {loggedInUser.lastName}
          </h1>
          <h2 className="username">{loggedInUser.username}</h2>
          <p className="bio">{loggedInUser.bio}</p>
          <div className="user-info-location-website">
            <p>{loggedInUser.location}</p>
            <a
              href={loggedInUser.website}
              target="_blank"
              rel="noopener noreferrer"
              className="website"
            >
              {loggedInUser.website}
            </a>
          </div>
        </div>
        <div className="user-data-container">
          <div className="user-data">
            <div className="count-flex">
              <h6>Projects</h6>
              <p>12</p>
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
                  key={team.avatar}
                  src={team.avatar}
                  className="team-avatar"
                  alt="team avatars"
                />
              ))}
            </div>
            <div>
              <Link to="/settings">
                <button className="edit-profile-btn">Edit Profile</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <UserProfileTabs />
    </div>
  );
};

export default UserProfile_LI;
