import React, { useEffect, useState } from 'react';
import '../SASS/OnboardingForm.scss';

import axios from 'axios';
import { useAuth0 } from '../auth-wrapper.js';

const OnboardingForm = () => {
  const { user } = useAuth0();

  const [formUser, setFormUser] = useState({
    avatar: '',
    bio: '',
    email: '',
    firstName: '',
    lastName: '',
    location: '',
    phoneNumber: '',
    username: '',
    website: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('ON SUBMIT formUser', formUser);
  };

  useEffect(() => {
    const getUserData = async () => {
      axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;
      const { id } = user;
      const res = await axios.get(`api/v1/users/${id}`);

      // this object shape will change soon
      console.log('res.data.data', res.data.data);
      const [userData] = res.data.data;
      let newFormUser = {};
      for (let prop in userData) {
        if (userData[prop] && formUser[prop] === '')
          newFormUser[prop] = userData[prop];
      }
      setFormUser({ ...formUser, ...newFormUser });
    };
    getUserData();
    // eslint-disable-next-line
  }, []);

  const {
    // avatar,
    bio,
    email,
    firstName,
    lastName,
    location,
    phoneNumber,
    username,
    website
  } = formUser;

  return (
    <div className="OnboardingForm">
      <header>Complete Your User Profile</header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={e =>
            setFormUser({ ...formUser, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor="firstName">FIRST NAME</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={firstName}
          onChange={e =>
            setFormUser({ ...formUser, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor="lastName">LAST NAME</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={lastName}
          onChange={e =>
            setFormUser({ ...formUser, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor="email">EMAIL</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={e =>
            setFormUser({ ...formUser, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor="location">LOCATION</label>
        <input
          id="location"
          name="location"
          type="text"
          value={location}
          onChange={e =>
            setFormUser({ ...formUser, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor="phoneNumber">
          PHONE <small>ex: 555-555-5555</small>
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={phoneNumber}
          onChange={e =>
            setFormUser({ ...formUser, [e.target.name]: e.target.value })
          }
        />

        <label htmlFor="website">WEBSITE</label>
        <input
          id="website"
          name="website"
          type="text"
          value={website}
          onChange={e =>
            setFormUser({ ...formUser, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor="bio">BIO</label>
        <textarea
          cols="30"
          rows="4"
          name="bio"
          id="bio"
          value={bio}
          onChange={e =>
            setFormUser({ ...formUser, [e.target.name]: e.target.value })
          }
        />

        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default OnboardingForm;
