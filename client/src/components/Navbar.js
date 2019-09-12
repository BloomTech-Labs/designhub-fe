import React from 'react';
import './SASS/Navbar.scss';
import createProjectIcon from './ASSETS/Create Project.svg';
import profileIcon from './ASSETS/Profile.svg';
import projectsIcon from './ASSETS/Projects.svg';
import inboxIcon from './ASSETS/Inbox.svg';
import settingsIcon from './ASSETS/Settings.svg';

const Navbar = props => {
  return (
    <nav>
      <img src={profileIcon} alt="my profile" />
      <img src={createProjectIcon} alt="create new project" />
      <img src={projectsIcon} alt="my projects" />
      <img src={inboxIcon} alt="notifications" />
      <img src={settingsIcon} alt="settings" />
    </nav>
  );
};

export default Navbar;
