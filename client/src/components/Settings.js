import React from 'react';
import { useAuth0 } from '../auth-wrapper.js';

import '../SASS/Settings.scss';

const Settings = ({ activeUser }) => {
  const { logout } = useAuth0();
  return (
    <div className="Settings">
      <div className="settings-left-column">
        <img src={activeUser.avatar} alt="avatar" />
        <h4>Account</h4>
        <h4>Privacy</h4>
        <h4>Notifications</h4>
        <h4>Linked Profiles</h4>
        <h4>Download Data</h4>
        <h4 className="settings-logout" onClick={() => logout()}>
          Log Out
        </h4>
      </div>
      <div className="settings-right-column">
        <h1 className="full-name">
          {activeUser.firstName} {activeUser.lastName}
        </h1>
        <h1 className="email">{activeUser.email}</h1>
        <button className="logout-btn" onClick={() => logout()}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Settings;
