import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileIcon from './Icons/ProfileIcon';
import CreateNewProjectIcon from './Icons/CreateNewProjectIcon';
import MyProjectsIcon from './Icons/MyProjectsIcon';
import InboxIcon from './Icons/InboxIcon';
import SettingsIcon from './Icons/SettingsIcon';
import '../SASS/Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <ProfileIcon />
      </NavLink>
      <p className="A">Profile</p>

      <NavLink to="/create">
        <CreateNewProjectIcon />
      </NavLink>
      <p className="B">New Project</p>

      <NavLink to="">
        <MyProjectsIcon />
      </NavLink>
      <p className="C">Projects</p>

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
