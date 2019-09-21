import React from 'react';
import { Link } from 'react-router-dom';

import SampleLogo from './Icons/SampleLogo.js';
import MagnifyingGlass from './Icons/MagnifyingGlass.js';
import SearchBar from './SearchBar.js';
import DarkModeSwitch from './Icons/DarkModeSwitch.js';

import '../SASS/TopBar.scss';

const TopBar = ({ activeUser }) => {
  return (
    <div className="top-bar-container">
      <div className="nav-content">
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
          <p>{activeUser.username}</p>
          <Link to={`/profile/${activeUser.id}/${activeUser.username}`}>
            <img
              className="profile-pic-thumb"
              src={activeUser.avatar}
              alt="user avatar"
            />
          </Link>
          <div className="dark-mode-switch">
            <DarkModeSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
