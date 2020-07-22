import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { MockedProvider } from '@apollo/client/testing';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { useAuth0 } from '../utilities/auth-spa';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { GET_PROJECT_BY_ID_QUERY } from '../graphql';
import ProjectComments from '../views/Project/ImageViewer/ProjectComments';
import { waitForDebugger } from 'inspector';
import TestRenderer from 'react-test-renderer';

// describe('Test the Query Component <ProjectComments />', () => {
//   it('should render without error', () => {
//     const wrapper = TestRenderer.create(
//       <MockedProvider mocks={[]}>
//         <ProjectComments />
//       </MockedProvider>
//     );
//     expect(wrapper).toMatchSnapshot();
//   });
// });

const mocks = [
  {
    request: {
      query: GET_PROJECT_BY_ID_QUERY,
      variables: {
        name: 'Hero',
      },
    },
    result: () => {
      return {
        data: {
          project: { id: '1', name: 'Hero' },
        },
      };
    },
  },
];

it('renders without error', () => {
  TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ProjectComments name="Hero" />
    </MockedProvider>
  );
});
