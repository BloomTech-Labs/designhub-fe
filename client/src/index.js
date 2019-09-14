import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './store/reducers';

import { Auth0Provider } from './auth-wrapper.js';
import config from './auth_config.js';
import * as Sentry from '@sentry/browser';

Sentry.init({ dsn: `${process.env.REACT_APP_SENTRY_DSN}` });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <App />
      </Auth0Provider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
