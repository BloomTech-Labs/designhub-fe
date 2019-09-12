import React from 'react';
import { useAuth0 } from '../auth-wrapper.js';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/fake-profile">Profile</Link>
      </span>
    </div>
  );
};

export default NavBar;
