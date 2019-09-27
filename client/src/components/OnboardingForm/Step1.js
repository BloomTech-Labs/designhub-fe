import React from 'react';
import errorIcon from '../../ASSETS/error-icon.svg';

const Step1 = ({ alert, formUser, onChange, setUsernameInput }) => {
  const {
    bio,
    email,
    firstName,
    lastName,
    location,
    username,
    website
  } = formUser;
  return (
    <>
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

      <label htmlFor="username">
        Username{alert && ' (This username is already taken)'}
      </label>
      <div className="alert-container">
        <img className="errorIcon" src={errorIcon} />
      </div>
      <input
        required
        ref={input => setUsernameInput(input)}
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

export default Step1;
