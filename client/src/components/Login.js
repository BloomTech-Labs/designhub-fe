import React from 'react';
import './Login.scss';

const Login = () => {
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
    </div>
  );
};

export default Login;
