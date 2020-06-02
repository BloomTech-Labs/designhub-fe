import gql from 'graphql-tag';

const users = gql`
	 query Users{
		users {
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
export default users;
