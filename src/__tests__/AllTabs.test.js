import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import AllTab from '../views/Explore/AllTab.js';
import { MockedProvider } from '@apollo/client/testing';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { useAuth0 } from '../utilities/auth-spa';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { GET_USER_BY_ID_QUERY } from '../graphql';
configure({ adapter: new Adapter() });
const history = createMemoryHistory();
const user = {
  email: 'johndoe@me.com',
  email_verified: true,
  sub: 'google-oauth2|2147627834623744883746',
};

const mocks = [
  {
    request: {
      query: GET_USER_BY_ID_QUERY,
      variables: {
        id: 'google-oauth2|2147627834623744883746',
      },
    },
    result: {
      data: {
        user: {
          id: 'google-oauth2|2147627834623744883746',
          firstName: 'Buck',
          lastName: 'bulldog',
          username: 'buckbulldog',
          email: 'buck@bulldog.com',
          location: 'Buckville, USA',
          bio: 'Do not mess with buck',
          website: 'buckwild.org',
          avatar: 'https://bulldog.img',
        },
      },
    },
  },
];

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
});

jest.mock('../utilities/auth-spa');
describe('components/AllTab - logged in', () => {
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
          <AllTab />
        </Router>
      </ApolloProvider>
    );
    expect(wrapper).toBeTruthy();
  });
  it('Renders with correct userId', async () => {
    const wrapper = mount(
      <ApolloProvider client={client}>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router history={history}>
            <AllTab id="google-oauth2|2147627834623744883746" />
          </Router>
        </MockedProvider>
      </ApolloProvider>
    );
    expect(wrapper).toBeTruthy();
    // should contain a button to be defined
  });
});

it('Renders with correct components', async () => {
  const wrapper = mount(
    <ApolloProvider client={client}>
      <Router history={history}>
        <AllTab />
      </Router>
    </ApolloProvider>
  );
  expect(wrapper).toBeTruthy();
  // should contain a button to be defined
  expect(wrapper.find('div')).toHaveLength(1);
});
