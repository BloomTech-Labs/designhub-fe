import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../utilities/auth-spa.js';
import Tooltip from 'react-power-tooltip';
import SampleLogo from '../../ASSETS/Icons/SampleLogo.js';
import logo from '../../ASSETS/logo.svg';
//import SearchBar from '../../views/Search/SearchBar.js';
import DarkModeSwitch from '../../ASSETS/Icons/DarkModeSwitch.js';
import sunMode from '../../ASSETS/sun-mode.svg';
import './SASS/LoginBar.scss';
const LoginBar = () => {
  const { loginWithRedirect } = useAuth0();
  const startLight = localStorage.getItem('theme') === 'light';
  const [light, setLight] = useState(startLight);
  const [show, setShow] = useState(false);
  const target = useRef();
  const init = () => {
    if (startLight) {
      toggleLightMode();
    }
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  };
  useEffect(init, []);
  const handleClick = (e) => {
    if (!target.current.contains(e.target)) {
      setShow(false);
    }
  };
  // look at mixins.scss and palette.scss for more info on this theming function
  const setLightMode = () => {
    toggleLightMode();
    if (light) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    setLight(!light);
  };
  const toggleLightMode = () => {
    document.documentElement.classList.toggle('theme-light');
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
  const login = () => {
    loginWithRedirect({});
    return window.location.reload();
  };
  return (
    <div className="top-bar-container">
      <div className="nav-content">
        <div className="logo-container">
          <Link to={`/`}>
            <SampleLogo />
          </Link>
        </div>
        <div
          className="top-bar-user-info"
          ref={target}
          onClick={() => setShow(!show)}
        >
          <button className="auth0-btn" onClick={login}>
            Create an account or Sign in
          </button>
          <div>
            <Tooltip
              show={show}
              arrowAlign="center"
              backgroundColor={light ? undefined : '#212229'}
              // hoverColor="#212229"
              border="1px solid #ffffff"
              position="bottom right"
              moveRight="-100px"
              lineSeparated
            ></Tooltip>
          </div>
        </div>
        <div className="dark-mode-switch" onClick={setLightMode}>
          {light ? (
            <img alt="sun-mode switch" src={sunMode} />
          ) : (
            <DarkModeSwitch />
          )}
        </div>
      </div>
      <div className="mobile-nav">
        <div className="mobile-logo-container">
          <img src={logo} className="mobile-logo" alt="logo" />
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
          {/*   <SearchBar searchData={searchData} getSearch={getSearch} />*/}
        </div>
        <button className="auth0-btn" onClick={login}>
          Create an account or Sign in
        </button>
      </div>
      <span className={showHideOverlayClassName} onClick={toggleNav} />
    </div>
  );
};
export default LoginBar;
