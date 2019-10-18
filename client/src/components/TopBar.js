import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import SampleLogo from './Icons/SampleLogo.js';
import logo from '../ASSETS/logo.svg';
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

  const [open, mobileNav] = useState(true);
  const toggleNav = () => {
    document.documentElement.classList.toggle('mobile-navlinks');
    mobileNav(!open);
  };

  const showHideClassName = open
    ? 'mobile-navlinks display-none'
    : 'mobile-navlinks display-block';

  const showHideOverlayClassName = open
    ? 'mobile-overlay display-none'
    : 'mobile-overlay display-block';

  return (
    <div className="top-bar-container">
      <>
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
            <Link to={`/profile/${activeUser.id}/${activeUser.username}`}>
              <p>{activeUser.username}</p>
            </Link>
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
        <div className="mobile-nav">
          <div className="mobile-logo-container">
            <Link to={`/profile/${activeUser.id}/${activeUser.username}`}>
              <img src={logo} className="mobile-logo" alt="logo" />
            </Link>
          </div>
          <svg
            alt="menu"
            className="mobile-menu"
            onClick={toggleNav}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 15H26.25"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.75 7.5H26.25"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.75 22.5H26.25"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={showHideClassName}>
          <div className="mobile-search">
            <SearchBar searchData={searchData} getSearch={getSearch} />
          </div>
          <NavLink
            to={`/profile/${activeUser.id}/${activeUser.username}`}
            className="links"
            activeClassName="active-links"
            onClick={toggleNav}
          >
            Profile
          </NavLink>
          <NavLink
            to="/create"
            className="links"
            activeClassName="active-links"
            onClick={toggleNav}
          >
            New Project
          </NavLink>

          <NavLink
            to="/explore"
            className="links"
            activeClassName="active-links"
            onClick={toggleNav}
          >
            Explore
          </NavLink>

          <NavLink
            to="/onboard"
            className="links"
            activeClassName="active-links"
            onClick={toggleNav}
          >
            Onboard
          </NavLink>

          <NavLink
            to="/settings"
            className="links"
            activeClassName="active-links"
            onClick={toggleNav}
          >
            Settings
          </NavLink>
        </div>
        <span className={showHideOverlayClassName} onClick={toggleNav} />
      </>
    </div>
  );
};

export default TopBar;
