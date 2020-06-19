import React from 'react';
import Layout from '../../common/Layout';
import './styles.scss';

export default function Settings() {
  return (
    <Layout>
       <div className="Settings">
      <div className="settings-left-column">
        <img src="{activeUser.avatar}" alt="avatar" />
        <h4>Account</h4>
        <h4>Privacy</h4>
        <h4>Notifications</h4>
        <h4>Linked Profiles</h4>
        <h4>Download Data</h4>
        <h4>Log Out</h4>
      </div>
      <div className="settings-right-column">

      </div>
    </div>
    </Layout>
  );
}
