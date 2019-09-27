import React from 'react';
import { useAuth0 } from '../auth-wrapper.js';

import '../SASS/Settings.scss';

const Settings = ({ activeUser }) => {
  const { logout } = useAuth0();
  return (
    <div className="Settings">
      <img src={activeUser.avatar} alt="avatar" />
      <h1 className="full-name">
        {activeUser.firstName} {activeUser.lastName}
      </h1>
      <h1 className="email">{activeUser.email}</h1>
      <button className="logout-btn" onClick={() => logout()}>
        Log Out
      </button>
    </div>
  );
};

export default Settings;
