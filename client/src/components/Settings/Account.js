import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';

import { getSingleUser, updateUser } from '../../store/actions';

const Account = ({ activeUser, getSingleUser, updateUser }) => {
  const [formUser, setFormUser] = useState({
    avatar: activeUser.avatar,
    bio: '',
    email: '',
    firstName: '',
    id: activeUser.id,
    lastName: '',
    location: '',
    username: '',
    website: '',
    auth0Id: activeUser.auth0Id
  });

  const {
    bio,
    email,
    firstName,
    lastName,
    location,
    username,
    website
  } = formUser;

  const [formSuccess, setFormSuccess] = useState(false);

  // alert state for required form inputs
  const [alert, setAlert] = useState({
    username: false,
    firstName: false,
    lastName: false,
    email: false
  });

  // DOM refs for required input fields
  const [firstNameRef, setFirstNameRef] = useState(null);
  const [lastNameRef, setLastNameRef] = useState(null);
  const [usernameRef, setUsernameRef] = useState(null);
  const [emailRef, setEmailRef] = useState(null);
  const focusRef = thisRef => {
    thisRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };
  const [userNameAlertClass, setuserNameAlertClass] = useState('required');

  // update alert status on render
  useEffect(() => {
    if (alert.username) {
      alert.username === 'taken'
        ? setuserNameAlertClass('required alert taken')
        : setuserNameAlertClass('required alert');
      focusRef(usernameRef);
    }
    if (alert.email) focusRef(emailRef);
    if (alert.lastName) focusRef(lastNameRef);
    if (alert.firstName) focusRef(firstNameRef);
  }, [alert, usernameRef, emailRef, firstNameRef, lastNameRef]);

  useEffect(() => {
    // getSingleUser(activeUser.id).then(res => console.log(res));
    getCurrentUserInfo(activeUser.id);
  }, [activeUser]);

  const getCurrentUserInfo = id => {
    return axiosWithAuth()
      .get(`/api/v1/users/${id}`)
      .then(res => {
        const user = res.data[0];
        setFormUser({
          avatar: user.avatar ? `${user.avatar}` : '',
          bio: user.bio ? `${user.bio}` : '',
          email: user.email ? `${user.email}` : '',
          firstName: user.firstName ? `${user.firstName}` : '',
          id: user.id,
          lastName: user.lastName ? `${user.lastName}` : '',
          location: user.location ? `${user.location}` : '',
          username: user.username ? `${user.username}` : '',
          website: user.website ? `${user.website}` : '',
          auth0Id: user.auth0Id
        });
      })
      .catch();
  };

  const handleChange = e => {
    if (e.target.name === 'username') setuserNameAlertClass('required');
    setFormSuccess(false);
    setAlert({
      ...alert,
      [e.target.name]: false
    });
    setFormUser({ ...formUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const validForm = await validateForm();
    if (validForm) {
      try {
        // await axiosWithAuth().put(`/api/v1/users/${activeUser.id}`, formUser);
        await updateUser(activeUser.id, formUser);
        await setFormSuccess(true);
      } catch (err) {
        console.error('Account.js handleSubmit() ERROR', err);
      }
    }
  };

  const validateForm = async () => {
    const { username, firstName, lastName, email } = formUser;
    const newAlert = {};
    if (username.trim().length === 0) newAlert.username = true;
    if (firstName.trim().length === 0) newAlert.firstName = true;
    if (lastName.trim().length === 0) newAlert.lastName = true;
    if (email.trim().length === 0) newAlert.email = true;
    if (!newAlert.username && username !== activeUser.username) {
      try {
        const res = await axiosWithAuth().get(
          `api/v1/users/check/${formUser.username}`
        );
        if (res.data.length !== 0) newAlert.username = 'taken';
      } catch (err) {
        console.error('Account.js validateForm() ERROR', err);
      }
    }
    const v = Object.values(newAlert);
    if (v.includes(true) || v.includes('taken')) {
      setAlert({ ...alert, ...newAlert });
      return false;
    } else return true;
  };

  return (
    <div className="account-form-container">
      <form className="account-form" onSubmit={e => e.preventDefault()}>
        <div className={alert.firstName ? 'required alert' : 'required'}>
          <label htmlFor="firstName">First Name</label>
          <input
            required
            id="firstName"
            name="firstName"
            type="text"
            value={firstName}
            onChange={handleChange}
            placeholder="i.e. Erik"
            ref={setFirstNameRef}
          />
        </div>

        <div className={alert.lastName ? 'required alert' : 'required'}>
          <label htmlFor="lastName">Last Name</label>
          <input
            required
            id="lastName"
            name="lastName"
            type="text"
            value={lastName}
            onChange={handleChange}
            placeholder="i.e. Lambert"
            ref={setLastNameRef}
          />
        </div>

        <div className={userNameAlertClass}>
          <label htmlFor="username">Username</label>
          <input
            required
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
            placeholder="i.e. eriklambert"
            ref={setUsernameRef}
          />
        </div>

        <div className={alert.email ? 'required alert' : 'required'}>
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={handleChange}
            placeholder="i.e. eriklambert@designhubx.com"
            ref={setEmailRef}
          />
        </div>

        <label htmlFor="bio">Bio</label>
        <textarea
          cols="30"
          rows="4"
          name="bio"
          id="bio"
          value={bio}
          onChange={handleChange}
          placeholder="Describe yourself! This will appear on your profile in your bio!"
        />
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          value={location}
          onChange={handleChange}
          maxLength="180"
          placeholder="i.e. Austin, TX"
        />

        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={website}
          onChange={handleChange}
          placeholder="i.e. https://eriklambert.ux"
        />
        {formSuccess ? (
          <button className="formSuccess-btn" type="null">
            Account Updated
          </button>
        ) : (
          <button onClick={handleSubmit}>Save</button>
        )}
      </form>
    </div>
  );
};

export default connect(
  null,
  { getSingleUser, updateUser }
)(Account);
