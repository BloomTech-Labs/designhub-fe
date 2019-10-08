import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../components/Loading';

describe('<App />', () => {
  describe('render', () => {
    const wrapper = shallow(<Loading />);

    it('should render Loading div element successfuly', () => {
      expect(wrapper.find('.Loading-container')).toHaveClassName(
        'Loading-container'
      );
      expect(wrapper.find('.Loading-container')).toExist();
    });
    it('should render Loader successfuly', () => {
      expect(wrapper.find('.loading-text')).toExist();
      expect(wrapper.find('.loading-text')).toHaveClassName('loading-text');
    });
  });
});
