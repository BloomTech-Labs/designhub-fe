import React from 'react';
import { Switch, Route, NavLink as Link } from 'react-router-dom';
import { useAuth0 } from '../../auth-wrapper.js';

import './SASS/Settings.scss';
import Account from './Account.js';

const Settings = ({ activeUser, match }) => {
  const { logout } = useAuth0();
  const { path } = match;
  return (
    <div className="Settings">
      <div className="settings-left-column">
        <img src={activeUser.avatar} alt="avatar" />
        <Link exact to={`${path}`} className="settings-link">
          <h4>Account</h4>
        </Link>
        <Link to={`${path}/privacy`} className="settings-link">
          <h4>Privacy</h4>
        </Link>

        <h4>Notifications</h4>
        <h4>Linked Profiles</h4>
        <h4>Download Data</h4>
        <h4 className="settings-logout" onClick={() => logout()}>
          Log Out
        </h4>
      </div>
      <div className="settings-right-column">
        <Switch>
          <Route
            path={`${path}`}
            exact
            render={props => <Account activeUser={activeUser} {...props} />}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Settings;
