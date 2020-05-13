import React from 'react';
import SearchPage from '../views/Search/SearchPage';
import rendererWithRouter from '../__testHelpers__/rendererWithRouter';


describe('<SearchPage />', () => {

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const searchData = {
        id: 1
      }
      const tree = rendererWithRouter(
        <SearchPage searchData={searchData} history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
})
