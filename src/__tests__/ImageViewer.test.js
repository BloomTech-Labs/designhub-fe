import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { GET_PROJECT_BY_ID_QUERY } from '../graphql';
import ImageViewer from '../views/Project/ImageViewer/ImageViewer';
import { waitForDebugger } from 'inspector';
import { MockedProvider } from '@apollo/client/testing';
import TestRenderer from 'react-test-renderer';

it('should render loading state initially', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={[]}>
      <ImageViewer />
    </MockedProvider>
  );
  const tree = component.toJson();
  expect(tree.children).toContain(<Loading />);
});
