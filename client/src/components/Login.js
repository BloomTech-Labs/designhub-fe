import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../SASS/Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="Login-container">
      <section className="left-side">
        <p>WELCOME TO</p>
        <h1>DESIGNHUB</h1>

        <div className="paragraphs">
          <span role="img" aria-label="handshake">
            🤝
          </span>
          <h2>
            Join and start creating projects and collaborating with teams!
          </h2>

          <span role="img" aria-label="briefcase">
            💼
          </span>
          <h2>
            House your case studies, deliverables, assets, links, and design
            files all in one place!
          </h2>

          <span role="img" aria-label="megaphone">
            📢
          </span>
          <h2>
            Give and recieve feedback with ease. No more worrying about your
            feedback getting lost in Slack messages!
          </h2>
        </div>
      </section>
      <section className="right-side">
        <div className="form-container">
          <header>
            <NavLink to="">SIGN UP</NavLink>
            <NavLink to="/login">LOG IN</NavLink>
          </header>
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
          <em>OR</em>
          <button className="auth0-facebook">Sign in with Facebook</button>
          <button className="auth0-twitter">Sign in with Twitter</button>
        </div>
      </section>
    </div>
  );
};

export default Login;
