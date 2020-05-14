import React from 'react';
import { shallow } from 'enzyme';
import DesignHub from '../DesignHub';
import rendererWithRouter from '../__testHelpers__/rendererWithRouter';
const activeUser ={
	id: 1
}
jest.mock('../utilities/auth-wrapper');
describe('<App />', () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      activeUser,
      loginWithRedirect: jest.fn(),
    });
  });
describe('<DesignHub />', () => {
	describe('should match the previous snapshot of the component', () => {
		it('tests that the component has not changed and matched the previous snapshot', () => {
			const tree = rendererWithRouter(
				<DesignHub
					history={{ location: { pathname: '/' } }}
				/>
			);
			expect(tree.toJSON()).toMatchSnapshot();
		});
	});
});
