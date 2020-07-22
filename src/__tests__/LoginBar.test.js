import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import LoginBar from '../common/nav/LoginBar.js';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { useAuth0 } from '../utilities/auth-spa';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const history = createMemoryHistory();
const user = {
  email: 'johndoe@me.com',
  email_verified: true,
  sub: 'google-oauth2|2147627834623744883746',
};

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
});

jest.mock('../utilities/auth-spa');
describe('components/LoginBar - logged in', () => {
  beforeEach(() => {
    // Mock the Auth0 hook and make it return a logged in state
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });
  });
  it('Renders with required props', async () => {
    const wrapper = mount(
      <ApolloProvider client={client}>
        <Router history={history}>
          <LoginBar />
        </Router>
      </ApolloProvider>
    );
    expect(wrapper).toBeTruthy();
  });
  it('Renders with correct link in the menu', async () => {
    const wrapper = mount(
      <ApolloProvider client={client}>
        <Router history={history}>
          <LoginBar />
        </Router>
      </ApolloProvider>
    );
    expect(wrapper).toBeTruthy();
    // should contain a button to be defined
    expect(wrapper.find('button')).toHaveLength(2);
  });
});
