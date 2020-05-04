import React from 'react'
import SearchUserCard from '../components/SearchUserCard'

import rendererWithRouter from '../__testHelpers__/rendererWithRouter'

describe('<SearchUserCard />', () => {

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const user = {
        id: 1
      }
      const tree = rendererWithRouter(
        <SearchUserCard user={user} history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
})
