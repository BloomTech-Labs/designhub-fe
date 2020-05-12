import React from 'react';
import SearchBar from '../views/Search/SearchBar';
import rendererWithRouter from '../__testHelpers__/rendererWithRouter';


describe('<SearchBar />', () => {

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const data = {
        search: 'test'
      }
      const tree = rendererWithRouter(
        <SearchBar data={data} history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
})
