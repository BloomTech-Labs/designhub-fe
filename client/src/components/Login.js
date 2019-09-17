import React from 'react';
import { useAuth0 } from '../auth-wrapper';
import '../SASS/Login.scss';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="Login-container">
      <section className="left-side">
        <p>WELCOME TO</p>
        <h1>
          DESIGN<em>HUB</em>
        </h1>

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

          <span role="img" aria-label="megaphone" className="megaphone">
            📢
          </span>
          <h2>
            Give and recieve feedback with ease. No more worrying about your
            feedback getting lost in Slack messages!
          </h2>
        </div>
      </section>
      <section className="right-side">
        <div className="cta">
          <header>START TODAY</header>
          <button
            className="auth0-redirect-btn"
            onClick={() => loginWithRedirect({})}
          >
            Let's Go!
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
