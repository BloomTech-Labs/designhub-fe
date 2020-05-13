import React from 'react';
import ProjectComments from '../views/ImageViewer/ProjectComments';
import { useAuth0 } from '../utilities/auth-wrapper';
import rendererWithRouter from '../__testHelpers__/rendererWithRouter';

const comment = {
  username: 'johndoe@me.com',
  commentText: 'testing',
  projectId: 1,
  invitedUserId: 2,
  activeUserId: 1,
  commentsId: 3,
};

jest.mock('../utilities/auth-wrapper');
describe('<ProjectComments />', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      comment,
      postCommentNotification: jest.fn(),
    });
  });

  describe('should match the previous snapshot of the component', () => {
    it('tests that the component has not changed and matched the previous snapshot', () => {
      const tree = rendererWithRouter(
        <ProjectComments history={{ location: { pathname: '/project' } }} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
