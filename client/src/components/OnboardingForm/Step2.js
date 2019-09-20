import React from 'react';

const Step2 = ({ formUser, onChange }) => {
  const { avatar } = formUser;
  return (
    <>
      <label htmlFor="avatar">Avatar</label>
      <input
        id="avatar"
        name="avatar"
        type="text"
        value={avatar}
        onChange={onChange}
      />
    </>
  );
};

export default Step2;
