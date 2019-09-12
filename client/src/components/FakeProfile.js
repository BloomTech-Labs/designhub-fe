// src/components/Profile.js

import React from 'react';
import { useAuth0 } from '../auth-wrapper.js';

const FakeProfile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }
  console.log('hello!');
  return (
    <>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </>
  );
};

export default FakeProfile;
