import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../common/Loading';
import rendererWithRouter from '../__testHelpers__/rendererWithRouter';

describe('<App />', () => {
  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouter(
        <Loading history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

  describe('render', () => {
    const wrapper = shallow(<Loading />);

    it('should render Loading div element successfuly', () => {
      expect(wrapper.find('.Loading-container')).toHaveClassName(
        'Loading-container'
      );
      expect(wrapper.find('.Loading-container')).toExist();
    });
  });
});
