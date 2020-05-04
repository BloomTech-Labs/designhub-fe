import React from 'react'
import ProjectForm from '../components/ProjectForm'

import rendererWithRouter from '../__testHelpers__/rendererWithRouter'

describe('<ProjectForm />', () => {

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const activeUser = {
        id: 1
      }
      const tree = rendererWithRouter(
        <ProjectForm user={activeUser} history={{ location: { pathname: '/' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
})
