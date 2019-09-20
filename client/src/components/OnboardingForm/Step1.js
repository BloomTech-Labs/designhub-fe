import React from 'react';

const Step1 = ({ formUser, onChange }) => {
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

export default Step1;
