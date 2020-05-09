import React from 'react';
import Notifications from '../views/Notifications/Notifications';
import rendererWithRouter from '../__testHelpers__/rendererWithRouter';

describe('<Notifications />', () => {
  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const activeUser = {
        id: 1,
      };
      const tree = rendererWithRouter(
        <Notifications
          activeUser={activeUser}
          history={{ location: { pathname: '/' } }}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
