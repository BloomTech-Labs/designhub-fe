import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from '../../utilities/auth-spa.js';
import Tooltip from 'react-power-tooltip';
import { useHistory } from 'react-router';
import SampleLogo from '../../ASSETS/Icons/SampleLogo.js';
import logo from '../../ASSETS/logo.svg';
// import Search from '../../views/Search';
import DarkModeSwitch from '../../ASSETS/Icons/DarkModeSwitch.js';
import sunMode from '../../ASSETS/sun-mode.svg';

import './styles.scss';

import { useQuery } from '@apollo/react-hooks';
import { GET_USER_BY_ID_QUERY } from '../../graphql/index';

const TopBar = ({ searchData, getSearch }) => {
  const { logout, user } = useAuth0();
  const history = useHistory();

  const { data: activeUser } = useQuery(GET_USER_BY_ID_QUERY, {
    variables: { id: user?.sub },
  });

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

  return (
    <div className="top-bar-container">
      <>
        <div className="nav-content">
          <div className="logo-container">
            <Link to={`/`}>
              <SampleLogo />
            </Link>
          </div>
          <div className="search-bar-container">
            {/*             <div className="magnifying-glass-container">
            <MagnifyingGlass />
          </div>*/}

            {/* <Search /> */}
          </div>
          <div
            className="top-bar-user-info"
            ref={target}
            onClick={() => setShow(!show)}
          >
            <p className="top-bar-user-info">{activeUser?.user?.username}</p>

            <div>
              <img
                className="profile-pic-thumb"
                src={activeUser?.user?.avatar}
                alt="user avatar"
                variant="danger"
              />

              <Tooltip
                show={show}
                arrowAlign="center"
                backgroundColor={light ? undefined : '#212229'}
                // hoverColor="#212229"
                border="1px solid #ffffff"
                position="bottom right"
                moveRight="-100px"
                lineSeparated
              >
                <span
                  onClick={() =>
                    history.push(`/profile/${activeUser?.user.username}`)
                  }
                  to={`/profile/${activeUser?.user.username}`}
                >
                  Profile
                </span>

                <span
                  onClick={() => history.push(`/create-project`)}
                  to={`/create-project`}
                >
                  New Project
                </span>

                <span onClick={() => history.push('/search')} to="/search">
                  Search
                </span>

                <span onClick={() => history.push('/')} to={`/`}>
                  Explore
                </span>

                <span
                  onClick={() => history.push(`/notifications`)}
                  to={`/notifications`}
                >
                  Notifications
                </span>

                <span
                  onClick={() => history.push('/settings')}
                  to={`/settings`}
                >
                  Settings
                </span>

                <span onClick={() => logout()} to={`/`}>
                  Log Out
                </span>
              </Tooltip>
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
            <Link
              to={`/profile/${activeUser?.user?.id}/${activeUser?.user?.username}`}
            >
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
            {/*   <SearchBar searchData={searchData} getSearch={getSearch} />*/}
          </div>
          <NavLink
            to={`/profile/${activeUser?.user?.id}/${activeUser?.user?.username}`}
            className="links"
            activeClassName="active-links"
            onClick={toggleNav}
          >
            Profile
          </NavLink>
          <NavLink
            to="/create-project"
            className="links"
            activeClassName="active-links"
            onClick={toggleNav}
          >
            New Project
          </NavLink>

          <NavLink
            to="/search"
            className="links"
            activeClassName="active-links"
            onClick={toggleNav}
          >
            Search
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
            to="/notificaitons"
            className="links"
            activeClassName="active-links"
            onClick={toggleNav}
          >
            Notifications
          </NavLink>

          <NavLink
            to="/settings"
            className="links"
            activeClassName="active-links"
            onClick={toggleNav}
          >
            Settings
          </NavLink>

          <NavLink
            to="/settings"
            className="links"
            activeClassName="active-links"
            onClick={toggleNav}
          >
            <span onClick={() => logout()}>Logout</span>
          </NavLink>
        </div>
        <span className={showHideOverlayClassName} onClick={toggleNav} />
      </>
    </div>
  );
};

export default TopBar;
