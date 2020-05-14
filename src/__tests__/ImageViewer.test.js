import React from 'react';
import { shallow } from 'enzyme';

import ImageViewer from '../views/ImageViewer/ImageViewer';
import rendererWithRouter from '../__testHelpers__/rendererWithRouter';
import Loading from '../common/Loading';
describe('<ImageViewer />', () => {
  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const activeImg ={
        id: 1
      }
      const tree = rendererWithRouter(
        <ImageViewer activeImg={activeImg} history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

});
