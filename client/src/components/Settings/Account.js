import React, { useState } from 'react';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';

const Account = ({ activeUser }) => {
  console.log('activeUser!!!!!!!!!!!!!!!', activeUser);
  const [formUser, setFormUser] = useState({
    avatar: activeUser.avatar ? `${activeUser.avatar}` : '',
    bio: activeUser.bio ? `${activeUser.bio}` : '',
    email: activeUser.email ? `${activeUser.email}` : '',
    firstName: activeUser.firstName ? `${activeUser.firstName}` : '',
    id: activeUser.id,
    lastName: activeUser.lastName ? `${activeUser.lastName}` : '',
    location: activeUser.location ? `${activeUser.location}` : '',
    username: activeUser.username ? `${activeUser.username}` : '',
    website: activeUser.website ? `${activeUser.website}` : '',
    auth0Id: activeUser.auth0Id
  });

  const {
    bio,
    email,
    firstName,
    lastName,
    location,
    username,
    website,
    auth0Id
  } = formUser;

  const handleChange = e => {
    setFormUser({ ...formUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    return axiosWithAuth()
      .put(`/api/v1/users/${activeUser.id}`, formUser)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className="account-form-container">
      <form onSubmit={handleSubmit} className="account-form">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={firstName}
          onChange={handleChange}
          placeholder="i.e. Erik"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={lastName}
          onChange={handleChange}
          placeholder="i.e. Lambert"
        />

        <label htmlFor="username">
          Username{alert && ' (This username is already taken)'}
        </label>

        <input
          required
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="i.e. eriklambert"
        />

        <label htmlFor="email">Email</label>
        <input
          required
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={handleChange}
          placeholder="i.e. eriklambert@designhubx.com"
        />
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
        <button>Save Changes</button>
      </form>
    </div>
  );
};

export default Account;
