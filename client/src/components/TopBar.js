import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SampleLogo from './Icons/SampleLogo.js';
import MagnifyingGlass from './Icons/MagnifyingGlass.js';
import SearchBar from './SearchBar.js';
import DarkModeSwitch from './Icons/DarkModeSwitch.js';
import sunMode from '../ASSETS/sun-mode.svg';

import '../SASS/TopBar.scss';

const TopBar = ({ activeUser, searchData, getSearch }) => {
  const [light, setLight] = useState(false);
  const setLightMode = () => {
    document.documentElement.classList.toggle('theme-light');
    setLight(!light);
  };
  return (
    <div className="top-bar-container">
      <div className="nav-content">
        <div className="logo-container">
          <Link to={`/profile/${activeUser.id}/${activeUser.username}`}>
            <SampleLogo />
          </Link>
        </div>
        <div className="search-bar-container">
          {/* <div className="magnifying-glass-container">
            <MagnifyingGlass />
          </div> */}

          <SearchBar searchData={searchData} getSearch={getSearch} />
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
          <div className="dark-mode-switch" onClick={setLightMode}>
            {light ? (
              <img alt="sun-mode switch" src={sunMode} />
            ) : (
              <DarkModeSwitch />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
