import gql from 'graphql-tag';

const users = gql`
	 {
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
`
export default users