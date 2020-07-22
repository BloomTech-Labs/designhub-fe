import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
//import { createBrowserHistory } from 'history';

import { Auth0Provider } from './utilities/auth-spa.js';
import config from './utilities/auth_config.js';
import * as Sentry from '@sentry/browser';

import ApolloClient from 'apollo-boost';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';

Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DSN });

const client = new ApolloClient({
  uri: process.env.REACT_APP_GQL_API,
});

const ApolloApp = () => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (!toggle) {
      setToggle(true);
    }
  }, [toggle]);
  const onRedirectCallback = (appState) => {
    window.history.replaceState(
      {},
      document.title,
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
    setToggle(false);
    window.location.reload();
  };
  
  return (
    <Router>
      <ApolloProvider client={client}>
        <Auth0Provider
          domain={config.domain}
          audience={config.audience}
          client_id={config.clientId}
          redirect_uri={window.location.origin}
          //redirect_uri={`${window.location.origin}/onboarding`}
          onRedirectCallback={onRedirectCallback}
        >
          <App />
        </Auth0Provider>
      </ApolloProvider>
    </Router>
  );
};
render(<ApolloApp />, document.getElementById('root'));

// redirect_uri={`${window.location.origin}/onboarding`}
