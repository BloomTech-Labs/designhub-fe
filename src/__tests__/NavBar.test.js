import React from 'react';
import NavBar from '../common/Nav/Navbar.js';

import rendererWithRouter from '../__testHelpers__/rendererWithRouter';

describe('<NavBar />', () => {
  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const activeUser = {
        id: 1,
      };
      const tree = rendererWithRouter(
        <NavBar
          activeUser={activeUser}
          history={{ location: { pathname: '/' } }}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
