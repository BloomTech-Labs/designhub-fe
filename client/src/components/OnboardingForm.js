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

      <form onSubmit={handleSubmit}>
        <header>
          <h1>Welcome to DesignHub</h1>
          <h2>Let's get started by creating your profile</h2>
        </header>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={firstName}
          onChange={e =>
            setFormUser({ ...formUser, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={lastName}
          onChange={e =>
            setFormUser({ ...formUser, [e.target.name]: e.target.value })
          }
        />
        <label htmlFor="username">Username</label>
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
        <label htmlFor="bio">Description</label>
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
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          value={location}
          onChange={e =>
            setFormUser({ ...formUser, [e.target.name]: e.target.value })
          }
        />

        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={website}
          onChange={e =>
            setFormUser({ ...formUser, [e.target.name]: e.target.value })
          }
        />
        <div className="buttons">
          <button className="prev-btn">Previous</button>
          <button className="next-btn">Next</button>
        </div>
      </form>
    </div>
  );
};

export default OnboardingForm;
