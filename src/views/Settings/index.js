import React from 'react';
import Layout from '../../common/Layout';
import { Route, NavLink as Link } from 'react-router-dom';
import { useAuth0 } from '../../utilities/auth-spa';
import Account from './Account';
import './styles.scss';
import Privacy from '../CreateProject/Privacy';

export default function Settings({ activeUser }) {
  const { logout } = useAuth0();
  return (
    <Layout>
      <div className="Settings">
        <div className="settings-left-column">
          <img src={activeUser?.avatar} alt="avatar" />
          <Link exact to="/settings" className="settings-link">
            <h4>Account</h4>
          </Link>
          <Link to="/settings/privacy" className="settings-link">
            <h4>Privacy</h4>
          </Link>

{/*          <h4>Notifications</h4>
          <h4>Linked Profiles</h4>
          <h4>Download Data</h4>*/}
          <h4 className="settings-logout" onClick={() => logout()}>
            Log Out
          </h4>
        </div>
        <div className="settings-right-column">
          {/* <Switch> */}
          <Route
            path="/settings"
            exact
            render={(props) => (
              <Account activeUser={activeUser} logout={logout} {...props} />
            )}
          />
          <Route path="/settings/privacy" component={Privacy} />
          {/* </Switch> */}
        </div>
      </div>
    </Layout>
  );
}
