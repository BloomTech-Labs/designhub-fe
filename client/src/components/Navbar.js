import React from 'react';
import { useAuth0 } from '../auth-wrapper.js';
import { NavLink } from 'react-router-dom';

import ProfileIcon from './Icons/ProfileIcon';
import CreateNewProjectIcon from './Icons/CreateNewProjectIcon';
import MyProjectsIcon from './Icons/MyProjectsIcon';
import InboxIcon from './Icons/InboxIcon';
import SettingsIcon from './Icons/SettingsIcon';

import '../SASS/Navbar.scss';

const Navbar = () => {
  const { logout } = useAuth0();
  const username = 'eriklambert';
  return (
    <nav>
      <NavLink to={`/profile/${username}`}>
        <ProfileIcon />
      </NavLink>
      <p className="A">Profile</p>

      <NavLink to="/create">
        <CreateNewProjectIcon />
      </NavLink>
      <p className="B">New Project</p>

      <NavLink to="/" onClick={() => logout()}>
        <MyProjectsIcon />
      </NavLink>
      <p className="C">LOGOUT</p>

      <NavLink to="/inbox">
        <InboxIcon />
      </NavLink>
      <p className="D">Notifications</p>

      <NavLink to="/fake-profile">
        <SettingsIcon />
      </NavLink>
      <p className="E">Settings</p>
    </nav>
  );
};

export default Navbar;
