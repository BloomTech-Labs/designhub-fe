import React from 'react';
import { useAuth0 } from './auth-wrapper.js';

import DesignHub from './DesignHub.js';
import LandingPage from './components/LandingPage.js';

import './App.scss';

function App() {
  const { isAuthenticated, loading, user } = useAuth0();
  if (typeof user === 'object') {
    // console.log('App.js user id', user.id);
    // console.log('App.js user onboarding', user.onboarding);
  }
  if (!isAuthenticated) {
    return <LandingPage />;
  } else if (typeof user === 'object') {
    return (
      <div className="App">
        <DesignHub user={user} />
      </div>
    );
  } else {
    return (
      <div className="isLoading">
        DESIGN<em>HUB</em>
      </div>
    );
  }
}

export default App;
