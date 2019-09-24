import React from 'react';
import { useAuth0 } from '../auth-wrapper.js';

import '../SASS/Settings.scss';

const Settings = ({ activeUser }) => {
  const { logout } = useAuth0();
  return (
    <div className="Settings">
      <img src={activeUser.avatar} alt="avatar" />
      <button className="logout-btn" onClick={() => logout()}>
        Log Out
      </button>
    </div>
  );
};

export default Settings;
