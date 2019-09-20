import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UserProfileTabs from './UserProfile_Tabs';

import '../SASS/UserProfile.scss';

class UserProfile_LI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const userInfo = this.props.userInfo;
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
              {userInfo.firstName} {userInfo.lastName}
            </h1>
            <h2 className="username">{userInfo.username}</h2>
            <p className="bio">{userInfo.bio}</p>
            <div className="user-info-location-website">
              <p>{userInfo.location}</p>
              <a
                href={userInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="website"
              >
                {userInfo.website}
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
  }
}

export default UserProfile_LI;
