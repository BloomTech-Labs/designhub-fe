import gql from 'graphql-tag';

const GET_ALL_USERS_QUERY = gql`
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
export default GET_ALL_USERS_QUERY;
