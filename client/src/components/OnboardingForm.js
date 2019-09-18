import React, { useEffect, useState } from 'react';
import '../SASS/OnboardingForm.scss';

import axios from 'axios';
import { useAuth0 } from '../auth-wrapper.js';

const OnboardingForm = () => {
  const { user } = useAuth0();

  const [dbUser, setDbUser] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  useEffect(() => {
    const getUserData = async () => {
      axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;
      const { id } = user;
      const res = await axios.get(`api/v1/users/${id}`);
      console.log('res.data.data', res.data.data);
      const [userData] = res.data.data;
      console.log({ userData });
      setDbUser(userData);
    };
    getUserData();
  }, []);

  console.log({ dbUser });
  return (
    <div className="form-container">
      <header>WELCOME</header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="sign-in-btn">Sign in</button>
      </form>
    </div>
  );
};

export default OnboardingForm;
