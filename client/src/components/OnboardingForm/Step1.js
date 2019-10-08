import React, { useState } from 'react';

const Step1 = ({ alert, formUser, onChange }) => {
  const {
    bio,
    email,
    firstName,
    lastName,
    location,
    username,
    website
  } = formUser;

  const [firstNameRef, setFirstNameRef] = useState(null);
  const [lastNameRef, setLastNameRef] = useState(null);
  const [usernameRef, setUsernameRef] = useState(null);
  const [emailRef, setEmailRef] = useState(null);

  const focusRef = thisRef => {
    thisRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  let userNameAlertClass = 'required';
  if (alert.username) {
    alert.username === 'taken'
      ? (userNameAlertClass = 'required alert taken')
      : (userNameAlertClass = 'required alert');
    focusRef(usernameRef);
  }
  if (alert.email) focusRef(emailRef);
  if (alert.lastName) focusRef(lastNameRef);
  if (alert.firstName) focusRef(firstNameRef);

  return (
    <div className="FormStep">
      <header>
        <h1>Welcome to DesignHub</h1>
        <h2>Let's get started by creating your profile</h2>
      </header>

      <div className={alert.firstName ? 'required alert' : 'required'}>
        <label htmlFor="firstName">First Name</label>
        <input
          required
          id="firstName"
          name="firstName"
          type="text"
          value={firstName}
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
          placeholder="i.e. eriklambert"
          ref={setUsernameRef}
        />
      </div>

      <div className={alert.email ? 'required alert' : 'required'}>
        <label className="req" htmlFor="email">
          Email
        </label>
        <input
          required
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={onChange}
          placeholder="i.e. eriklambert@designhubx.com"
          ref={setEmailRef}
        />
      </div>

      <label className="bio" htmlFor="bio">
        Description
      </label>
      <textarea
        cols="30"
        rows="4"
        name="bio"
        id="bio"
        value={bio}
        onChange={onChange}
        maxLength="180"
        placeholder="Describe yourself! This will appear on your profile in your bio!"
      />

      <label htmlFor="location">Location</label>
      <input
        id="location"
        name="location"
        type="text"
        value={location}
        onChange={onChange}
        placeholder="i.e. Austin, TX"
      />

      <label htmlFor="website">Website</label>
      <input
        id="website"
        name="website"
        type="text"
        value={website}
        onChange={onChange}
        placeholder="i.e. https://eriklambert.ux"
      />
    </div>
  );
};

export default Step1;
