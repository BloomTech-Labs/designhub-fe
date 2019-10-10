import React from 'react';
import { NavLink } from 'react-router-dom';

import ProfileIcon from './Icons/ProfileIcon';
import CreateNewProjectIcon from './Icons/CreateNewProjectIcon';
import MyProjectsIcon from './Icons/MyProjectsIcon';
import InboxIcon from './Icons/InboxIcon';
import SettingsIcon from './Icons/SettingsIcon';

import '../SASS/Navbar.scss';

const Navbar = ({ activeUser }) => {
  return (
    <nav>
      <div className="icon-links">
        <div className="navlinks">
          <NavLink
            to={`/profile/${activeUser.id}/${activeUser.username}`}
            activeClassName="active-links"
          >
            <div className="ProfileIcon">
              <ProfileIcon />
            </div>
          </NavLink>
        </div>

        <div className="navlinks">
          <NavLink to="/create" activeClassName="active-links">
            <CreateNewProjectIcon />
          </NavLink>
        </div>

        <div className="navlinks">
          <NavLink to="/explore" activeClassName="active-links">
            <MyProjectsIcon />
          </NavLink>
        </div>

        <div className="navlinks">
          <NavLink to="/onboard" activeClassName="active-links">
            <InboxIcon />
          </NavLink>
        </div>

        <div className="navlinks">
          <NavLink to="/settings" activeClassName="active-links">
            <SettingsIcon />
          </NavLink>
        </div>
      </div>
      <div className="text-links">
        <NavLink
          to={`/profile/${activeUser.id}/${activeUser.username}`}
          className="links"
          activeClassName="active-links"
        >
          Profile
        </NavLink>

        <NavLink to="/create" className="links" activeClassName="active-links">
          New Project
        </NavLink>

        <NavLink to="/explore" className="links" activeClassName="active-links">
          Explore
        </NavLink>

        <NavLink
          to={`/notifications/${activeUser.id}/${activeUser.username}`}
          className="links"
          activeClassName="active-links"
        >
          Notifications
        </NavLink>

        <NavLink
          to="/settings"
          className="links"
          activeClassName="active-links"
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
