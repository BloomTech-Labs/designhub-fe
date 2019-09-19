import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { ONBOARD_SUCCESS } from '../store/actions/usersActions';

import '../SASS/OnboardingForm.scss';

const OnboardingForm = props => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.users);

  const [formUser, setFormUser] = useState({
    avatar: '',
    bio: '',
    email: '',
    firstName: '',
    id: '',
    lastName: '',
    location: '',
    phoneNumber: '',
    username: '',
    website: ''
  });

  useEffect(() => {
    let newFormUser = {};
    for (let prop in currentUser) {
      if (currentUser[prop] && formUser[prop] === '')
        newFormUser[prop] = currentUser[prop];
    }
    setFormUser({ ...formUser, ...newFormUser });
    // eslint-disable-next-line
  }, [currentUser]);

  const {
    // avatar,
    bio,
    email,
    firstName,
    id,
    lastName,
    location,
    phoneNumber,
    username,
    website
  } = formUser;

  const handleSubmit = async e => {
    e.preventDefault();
    console.log({ formUser });
    try {
      axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;
      const res = await axios.put(`api/v1/users/${id}`, formUser);
      console.log('HANDLESUBMIT res.data', res.data);
      // this object shape will change soon
      const [thisUser] = res.data;
      dispatch({ type: ONBOARD_SUCCESS, payload: thisUser });
      return props.history.push('/');
    } catch (err) {
      console.log('HANDLE SUBMIT', err);
    }
  };

  return (
    <div className="OnboardingForm">
      <Redirect to="/onboard" />
      <header>Complete Your User Profile</header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME</label>
        <input
          required
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
          required
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
