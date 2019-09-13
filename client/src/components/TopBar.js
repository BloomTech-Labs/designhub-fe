import React from 'react';
import SampleLogo from './Icons/SampleLogo.js';
import MagnifyingGlass from './Icons/MagnifyingGlass.js';
import SearchBar from './SearchBar.js';
import DarkModeSwitch from './Icons/DarkModeSwitch.js';
import avatar from './ASSETS/avatar.jpg';
import './SASS/TopBar.scss';

const TopBar = () => {
  const userInfo = {
    avatar: avatar,
    userName: 'eriklambert',
    firstName: 'Erik',
    lastName: 'Lambert',
    bio:
      'I love designing and always looking for ways to improve and innovate. 🤓 #Usersmatter! #LambdaBound #UXEngineer',
    location: 'Austin, TX',
    website: 'https://eriklambert.io',
    projects: 12,
    followers: 36,
    following: 1,
    starred: 143
  };

  return (
    <div className="top-bar-container">
      <div className="logo-container">
        <SampleLogo />
      </div>
      <div className="search-bar-container">
        <div className="magnifying-glass-container">
          <MagnifyingGlass />
        </div>

        <SearchBar />
      </div>
      <div className="top-bar-user-info">
        <p>{userInfo.userName}</p>
        <img
          className="profile-pic-thumb"
          src={userInfo.avatar}
          alt="user avatar"
        />
        <div className="dark-mode-switch">
          <DarkModeSwitch />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
