import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../store/actions/usersActions';

import '../SASS/OnboardingForm.scss';

const uuidv1 = require('uuid/v1');

const OnboardingForm = props => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.users);
  const [step, setStep] = useState(1);
  const [formUser, setFormUser] = useState({
    avatar: '',
    bio: '',
    email: '',
    firstName: '',
    id: '',
    lastName: '',
    location: '',
    phoneNumber: uuidv1(),
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

  const { id } = formUser;

  const handleChange = e => {
    setFormUser({ ...formUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log({ id, formUser });
    dispatch(updateUser(id, formUser));
  };

  const logSubmit = e => {
    e.preventDefault();
    console.log(formUser);
  };

  return (
    <div className="OnboardingForm">
      <Redirect to="/onboard" />

      <form onSubmit={handleSubmit}>
        <header>
          <h1>Welcome to DesignHub</h1>
          <h2>Let's get started by creating your profile</h2>
        </header>
        <Step1 formUser={formUser} onChange={handleChange} />
        <div className="buttons">
          <button className="prev-btn">Previous</button>
          <button className="next-btn" onClick={logSubmit}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnboardingForm;

const Step1 = ({ formUser, onChange }) => {
  const {
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
  return (
    <>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        value={firstName}
        onChange={onChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        value={lastName}
        onChange={onChange}
      />
      <label htmlFor="username">Username</label>
      <input
        required
        id="username"
        name="username"
        type="text"
        value={username}
        onChange={onChange}
      />
      <label htmlFor="email">Email</label>
      <input
        required
        id="email"
        name="email"
        type="text"
        value={email}
        onChange={onChange}
      />
      <label htmlFor="bio">Description</label>
      <textarea
        cols="30"
        rows="4"
        name="bio"
        id="bio"
        value={bio}
        onChange={onChange}
      />
      <label htmlFor="location">Location</label>
      <input
        id="location"
        name="location"
        type="text"
        value={location}
        onChange={onChange}
      />

      <label htmlFor="website">Website</label>
      <input
        id="website"
        name="website"
        type="text"
        value={website}
        onChange={onChange}
      />
    </>
  );
};
