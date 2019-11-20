import React from 'react';
import {useAuth0} from '../auth-wrapper';

const NewLandingPage = () =>{
  const {loginWithRedirect} = useAuth0();
  return(
    <div className="top-left">
      <p>WELCOME TO</p>
      <h1>
        DESIGN<em>HUB</em>
      </h1>
      <button
        className="auth0-redirect-btn"
        onClick={() => loginWithRedirect({})}
      >
        Create an account or Sign in
      </button>
      <h1>
        Super-charge your design workflow now and start collaborating like
        a beast
      </h1>
    </div>
  )
}

export default NewLandingPage;