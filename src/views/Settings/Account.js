import React, { useState, useEffect } from 'react';

import CharacterCount from '../../common/CharacterCount/CharacterCount';

import { useMutation } from '@apollo/react-hooks';
import { UPDATE_USER_MUTATION } from '../../graphql';

import { useForm } from 'react-hook-form';

// import { useAuth0 } from "../../utilities/auth-spa"

const Account = ({ activeUser }) => {
  const [updateUser] = useMutation(UPDATE_USER_MUTATION);
  const { handleSubmit, register } = useForm();
  // const { user } = useAuth0()
  const [formUser, setFormUser] = useState({
    avatar: activeUser?.avatar,
    bio: activeUser?.boi,
    email: activeUser?.email,
    firstName: activeUser?.firstName,
    id: activeUser?.id,
    lastName: activeUser?.lastName,
    location: activeUser?.location,
    username: activeUser?.username,
    website: activeUser?.website,
  });

  const [formSuccess, setFormSuccess] = useState(false);

  // alert state for required form inputs
  const [alert, setAlert] = useState({
    username: false,
    firstName: false,
    lastName: false,
    email: false,
  });
  // };
  const [userNameAlertClass, setUsernameAlertClass] = useState('required');

  const onSubmit = (data) => {
    updateUser({
      variables: {
        data: {
          id: activeUser?.id,
          avatar: activeUser?.avatar,
          bio: data.bio,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          location: data.location,
          username: data.username,
          website: data.website,
        },
      },
    });
    setFormSuccess(true);
  };

  return (
    <div className="account-form-container">
      <form className="account-form" onSubmit={handleSubmit(onSubmit)}>
        <div className={alert.firstName ? 'required alert' : 'required'}>
          <label htmlFor="firstName">First Name</label>
          <input
            required
            id="firstName"
            name="firstName"
            type="text"
            placeholder="i.e. Erik"
            defaultValue={activeUser?.firstName}
            ref={register}
            maxLength="40"
          />
        </div>

        <div className={alert.lastName ? 'required alert' : 'required'}>
          <label htmlFor="lastName">Last Name</label>
          <input
            required
            id="lastName"
            name="lastName"
            type="text"
            defaultValue={activeUser?.lastName}
            placeholder="i.e. Lambert"
            ref={register}
            maxLength="40"
          />
        </div>

        <div className={userNameAlertClass}>
          <label htmlFor="username">Username</label>
          <input
            required
            id="username"
            name="username"
            type="text"
            defaultValue={activeUser?.username}
            placeholder="i.e. eriklambert"
            ref={register}
            maxLength="80"
          />
        </div>

        <div className={alert.email ? 'required alert' : 'required'}>
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            name="email"
            type="text"
            defaultValue={activeUser?.email}
            readOnly
            placeholder="i.e. eriklambert@designhubx.com"
            ref={register}
            maxLength="80"
          />
        </div>

        <label htmlFor="bio">Bio</label>
        <textarea
          cols="30"
          rows="4"
          name="bio"
          id="bio"
          defaultValue={activeUser?.bio}
          ref={register}
          placeholder="Describe yourself! This will appear on your profile in your bio!"
          maxLength="240"
        />
        <CharacterCount string={activeUser?.bio} limit={240} />
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          defaultValue={activeUser?.location}
          ref={register}
          maxLength="180"
          placeholder="i.e. Austin, TX"
        />
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          defaultValue={activeUser?.website}
          ref={register}
          placeholder="i.e. https://eriklambert.ux"
        />
        {formSuccess ? (
          <button className="formSuccess-btn" type="null">
            Account Updated
          </button>
        ) : (
          <button type="submit">Save</button>
        )}
      </form>
    </div>
  );
};

export default Account;
