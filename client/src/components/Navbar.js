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
      <div className="navlinks">
        <NavLink
          to={`/profile/${activeUser.id}/${activeUser.username}`}
          activeClassName="active-links"
        >
          <ProfileIcon />
        </NavLink>
        <NavLink
          to={`/profile/${activeUser.id}/${activeUser.username}`}
          className="links"
          activeClassName="active-links"
        >
          <p className="A">Profile</p>
        </NavLink>
      </div>

      <div className="navlinks">
        <NavLink to="/create" activeClassName="active-links">
          <CreateNewProjectIcon />
        </NavLink>
        <NavLink to="/create" className="links" activeClassName="active-links">
          <p className="B">New Project</p>
        </NavLink>
      </div>

      <div className="navlinks">
        <NavLink to="/explore" activeClassName="active-links">
          <MyProjectsIcon />
        </NavLink>
        <NavLink to="/explore" className="links" activeClassName="active-links">
          <p className="C">Explore</p>
        </NavLink>
      </div>

      <div className="navlinks">
        <NavLink to="/onboard" activeClassName="active-links">
          <InboxIcon />
        </NavLink>
        <NavLink to="/onboard" className="links" activeClassName="active-links">
          <p className="D">Onboard</p>
        </NavLink>
      </div>

      <div className="navlinks">
        <NavLink to="/settings" activeClassName="active-links">
          <SettingsIcon />
        </NavLink>
        <NavLink
          to="/settings"
          className="links"
          activeClassName="active-links"
        >
          <p className="E">Settings</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
