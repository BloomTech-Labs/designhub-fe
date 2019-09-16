import React, { Component } from 'react';

import './SASS/UserProfile.scss';

import avatar from '../components/ASSETS/avatar.jpg';
import UserContent from './UserContent';
import UserTabs from './UserTabs';

class UserProfile_LI extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const userInfo = {
      avatar: avatar,
      userName: 'eriklambert',
      firstName: 'Erik',
      lastName: 'Lambert',
      bio:
        'I love designing and always looking for ways to improve and innovate. 🤓 #Usersmatter! #LambdaBound #UXEngineer',
      location: 'Austin, TX',
      website: 'https://eriklambert.io',
      projects: 12,
      followers: 36,
      following: 1,
      starred: 143
    };

    return (
      <div className="profile-container">
        <UserContent userInfo={userInfo} />
        <UserTabs />
      </div>
    );
  }
}

export default UserProfile_LI;
