import React, { useState } from 'react';

import welcome from '../../ASSETS/welcome.svg';

import CharacterCount from '../../common/CharacterCount/CharacterCount';

const Step1 = ({
  alert,
  formUser,
  onChange,
  showPrev,
  handleNextButton,
  handlePrevButton,
  logout,
  submitButton,
}) => {
  const {
    bio,
    //email,
    firstName,
    lastName,
    location,
    username,
    website
  } = formUser;

  const [firstNameRef, setFirstNameRef] = useState(null);
  const [lastNameRef, setLastNameRef] = useState(null);
  const [usernameRef, setUsernameRef] = useState(null);
 // const [emailRef, setEmailRef] = useState(null);

  const focusRef = thisRef => {
    thisRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  let userNameAlertClass = 'required input-field';
  if (alert.username) {
    alert.username === 'taken'
      ? (userNameAlertClass = 'required alert taken input-field')
      : (userNameAlertClass = 'required alert input-field');
    focusRef(usernameRef);
  }
 // if (alert.email) focusRef(emailRef);
  if (alert.lastName) focusRef(lastNameRef);
  if (alert.firstName) focusRef(firstNameRef);

  return (
    <div className="FormStep">
      <div className="left-side">
        <h6 className="steps">Step 1 / 2</h6>
        <div className="left-container">
          <header>
            <h1>Let's get to know you more!</h1>
            <p>This information will be visible on your profile.</p>
          </header>
          <div className="first_lastname-flex">
            <div>
              <div
                className={
                  alert.firstName
                    ? 'required alert input-field'
                    : 'required input-field'
                }
              >
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
            </div>

            <div>
              <div
                className={
                  alert.lastName
                    ? 'required alert input-field'
                    : 'required input-field'
                }
              >
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
            </div>
          </div>

          <div>
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
          </div>

          <div>
{/*            <div
              className={
                alert.email
                  ? 'required alert input-field'
                  : 'required input-field'
              }
            >
              <label className="req" htmlFor="email">
                Email
              </label>
              <input
                required
                id="email"
                name="email"
                type="text"
                value={email}
                //disabled
                onChange={onChange}
                placeholder="i.e. eriklambert@designhubx.com"
                ref={setEmailRef}
              />
            </div>*/}
          </div>
          <div className="input-field">
            <label className="bio" htmlFor="bio">
              Bio
            </label>
            <textarea
              cols="30"
              rows="4"
              name="bio"
              id="bio"
              value={bio}
              onChange={onChange}
              maxLength="240"
              placeholder="Describe yourself! This will appear on your profile in your bio!"
            />
            <CharacterCount string={bio} limit={240} />
          </div>
          <div className="location-website-flex">
            <div className="input-field">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                name="location"
                type="text"
                value={location}
                onChange={onChange}
                placeholder="i.e. Austin, TX"
              />
            </div>
            <div className="input-field">
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
          </div>
          <div className="buttons">
            {showPrev ? (
              <button
                name="prev"
                className="prev-btn"
                onClick={handlePrevButton}
              >
                Previous
              </button>
            ) : (
                <button name="cancel" className="prev-btn" onClick={logout}>
                  Cancel
              </button>
              )}
            {submitButton ? (
              <button className="next-btn" type="submit">
                Submit
              </button>
            ) : (
                <button
                  name="next"
                  className="next-btn"
                  onClick={handleNextButton}
                >
                  Next
              </button>
              )}
          </div>
        </div>
      </div>

      <div className="right-side">
        <header>
          <img src={welcome} alt="welcome to designhub" className="welcome" />
          <h2>
            Create projects and receive feedback by displaying your work on
            DesignHub
          </h2>
        </header>
      </div>
    </div>
  );
};

export default Step1;

