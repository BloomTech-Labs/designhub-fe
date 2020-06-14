import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import { Auth0Provider } from './utilities/auth-spa.js';
import config from './utilities/auth_config.js';
import * as Sentry from '@sentry/browser';


import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache, fragmentMatcher } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { CachePersistor } from 'apollo-cache-persist';
import createAuth0Client from '@auth0/auth0-spa-js';

/* Make sure auth0 client is available before AuthProvider gets assigned */
createAuth0Client({
      domain:`${process.env.REACT_APP_DOMAIN}`,
      audience:`${process.env.REACT_APP_BASE_URL}`,
      client_id:`${process.env.REACT_APP_CLIENT_ID}`,
      redirect_uri:`${process.env.REACT_APP_REDIRECT_URI}`,
}).then((auth0) => {
  const auth0Client = auth0;

  /* Set URI for all Apollo GraphQL requests (backend api) */
  const httpLink = new HttpLink({
    uri: `${process.env.REACT_APP_DOMAIN}`,
    fetchOptions: { credentials: 'same-origin' },
  });

  /* Set in-memory token to reduce async requests */
  let token;

  /* Create Apollo Link to supply token with either
   * in-memory ref or auth0 req'ed token or redirect (built into
   * getTokenSilently
  */
  const withTokenLink = setContext(async () => {
    // return token if there
    if (token) return { auth0Token: token };

    // else check if valid token exists with client already and set if so
    const newToken = await auth0Client.getTokenSilently();
    token = newToken;
    return { auth0Token: newToken };
  });

  /* Create Apollo Link to supply token in auth header with every gql request */
  const authLink = setContext((_, { headers, auth0Token }) => ({
    headers: {
      ...headers,
      ...(auth0Token ? { authorization: `Bearer ${auth0Token}` } : {}),
    },
  }));

  /* Create Apollo Link array to pass to Apollo Client */
  const link = ApolloLink.from([withTokenLink, authLink, httpLink]);

  /* Set up local cache */
  const cache = new InMemoryCache({});

  /* Create Apollo Client */
  const client = new ApolloClient({
    link,
    cache,
  });

  /* Create persistor to handle persisting data from local storage on refresh, etc */
  const persistor = new CachePersistor({ cache, storage: window.localStorage });

  /* Create root render function */
  const ApolloApp = (Component) => {
    render(
        <ApolloProvider client={client}>
        <Router>
        <Auth0Provider
          domain={config.domain}
          audience={config.audience}
          client_id={config.clientId}
          redirect_uri={window.location.origin}
          auth0Client={auth0Client}
        >
            <Component />
          </Auth0Provider>
          </Router>
        </ApolloProvider>,
      document.getElementById('root'),
    );
  };

  /* Render React App after hydrating from local storage */
  persistor.restore().then(() => {
    ApolloApp(App);
  });
});