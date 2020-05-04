import React from 'react'
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createMemoryHistory } from 'history';
import renderer from 'react-test-renderer';
import thunk from 'redux-thunk';

import rootReducer from '../store/reducers';
jest.mock('../auth-wrapper');

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
const rendererWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...renderer.create(
      <Provider store={store}>
        <Router history={history}>
          {ui}
        </Router>
      </Provider>
    ),
    history
  }
}

export default rendererWithRouter;
