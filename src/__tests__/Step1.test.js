import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Step1 from '../views/Onboarding/Step1.js';
import { MockedProvider } from '@apollo/client/testing';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { useAuth0 } from '../utilities/auth-spa';
import { mount, shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
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
describe('components/Step1 - logged in', () => {
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
    const wrapper = shallow(
      <ApolloProvider client={client}>
        <Router history={history}>
          <Step1 />
        </Router>
      </ApolloProvider>
    );
    expect(wrapper).toBeTruthy();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
