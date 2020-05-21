import gql from 'graphql-tag';

const user = gql`
	 query User($id: ID!) {
		user (id: $id) {
		id
		auth0Id
		username
		email
		phoneNumber
		firstName
		lastName
		location
		bio
		website
		avatar
		created_at
	}
};
`;
export default user;