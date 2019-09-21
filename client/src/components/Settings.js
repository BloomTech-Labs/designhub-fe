import React from 'react';
import { useAuth0 } from '../auth-wrapper.js';

import '../SASS/Settings.scss';

const Settings = () => {
  const { logout } = useAuth0();
  return (
    <div className="Settings">
      <button className="logout-btn" onClick={() => logout()}>
        Log Out
      </button>
    </div>
  );
};

export default Settings;
