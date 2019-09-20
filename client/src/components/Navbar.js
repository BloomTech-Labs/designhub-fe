import React from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth0 } from '../auth-wrapper.js';
import { useSelector } from 'react-redux';

import ProfileIcon from './Icons/ProfileIcon';
import CreateNewProjectIcon from './Icons/CreateNewProjectIcon';
import MyProjectsIcon from './Icons/MyProjectsIcon';
import InboxIcon from './Icons/InboxIcon';
import SettingsIcon from './Icons/SettingsIcon';

import '../SASS/Navbar.scss';

const Navbar = () => {
  const loggedInUser = useSelector(state => state.users.currentUser);
  const { logout } = useAuth0();
  return (
    <nav>
      <NavLink to={`/profile/${loggedInUser.username}`}>
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

      <NavLink to="/onboard">
        <InboxIcon />
      </NavLink>
      <p className="D">Onboarding Form</p>

      <NavLink to="/fake-profile">
        <SettingsIcon />
      </NavLink>
      <p className="E">Settings</p>
    </nav>
  );
};

export default Navbar;
