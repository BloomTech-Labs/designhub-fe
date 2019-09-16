import React from 'react';
import link from '../components/ASSETS/link.svg';
import map from '../components/ASSETS/map-pin.svg';

const UserContent = ({ userInfo }) => {
  return (
    <div className="user-content">
      <div className="user-info">
        <img src={userInfo.avatar} className="avatar" alt="user avatar" />
        <div className="user-info-text">
          <h1 className="userFLname">
            {userInfo.firstName} {userInfo.lastName}
          </h1>
          <p className="username">{userInfo.userName}</p>
          <p className="user-bio">{userInfo.bio}</p>
          <div className="user-location-website">
            <div className="user-location-website-flex">
              <img src={map} alt="location" />
              <p>{userInfo.location}</p>
            </div>
            <div className="user-location-website-flex">
              <img src={link} alt="website" />
              <p>{userInfo.website}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="user-data">
        <div className="user-data-flex">
          <div>
            <p>Projects</p>
            <p>{userInfo.projects}</p>
          </div>
          <div>
            <p>Followers</p>
            <p>{userInfo.followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p>{userInfo.following}</p>
          </div>
          <div>
            <p>Starred</p>
            <p>{userInfo.starred}</p>
          </div>
        </div>
        <button className="user-content-btn">Edit Profile</button>
      </div>
    </div>
  );
};

export default UserContent;
