import React from 'react'
import Heatmap from '../components/UserProfile/Heatmap'

import rendererWithRouter from '../__testHelpers__/rendererWithRouter'

describe('<Heatmap />', () => {

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouter(
        <Heatmap history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
})
