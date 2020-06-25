import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
//import { createBrowserHistory } from 'history';

import { Auth0Provider } from './utilities/auth-spa.js';
import config from './utilities/auth_config.js';
import * as Sentry from '@sentry/browser';

import ApolloClient from 'apollo-boost';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';

Sentry.init({ dsn: `${process.env.REACT_APP_SENTRY_DSN}` });

// Use `createHashHistory` to use hash routing
//export const history = createBrowserHistory();

const onRedirectCallback = (appState) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};
// const onRedirectCallback = (appState) => {
//   // If using a Hash Router, you need to use window.history.replaceState to
//   // remove the `code` and `state` query parameters from the callback url.
//   // window.history.replaceState({}, document.title, window.location.pathname);
//   history.replace((appState && appState.returnTo) || window.location.pathname);
// };
const client = new ApolloClient({
  uri: process.env.REACT_APP_GQL_API,
});

const ApolloApp = () => (
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
render(<ApolloApp />, document.getElementById('root'));


// redirect_uri={`${window.location.origin}/onboarding`}