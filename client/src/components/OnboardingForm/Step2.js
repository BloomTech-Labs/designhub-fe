import React from 'react';
import UploadCloud from '../Icons/UploadCloud';

const Step2 = ({ formUser, onChange }) => {
  const { avatar } = formUser;
  return (
    <>
      <header>
        <h1>Welcome {`${formUser.firstName}`}</h1>
        <h2>Upload a picture to complete your profile</h2>
      </header>
      <label htmlFor="avatar">Avatar</label>
      <input
        id="avatar"
        name="avatar"
        type="text"
        value={avatar}
        onChange={onChange}
      />

      <div className="uploadImage">
        <UploadCloud />
      </div>
    </>
  );
};

export default Step2;
