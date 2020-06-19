import React from 'react';
import Layout from '../../common/Layout';
import './styles.scss';

export default function Privacy() {
  return (
    <Layout>
    <h2>Who can see your Profile?</h2>
    <input type="radio" id="Private" name="Private" value="Private (Only followers can view)"></input>
    <input type="radio" id="Public" name="Public" value="Public (Anyone can view)"></input>
    <div>
        <button className="edit-profile-btn">Save</button>
    </div>
    </Layout>
  );
}
