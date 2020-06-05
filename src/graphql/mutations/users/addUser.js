import gql from 'graphql-tag';

const ADD_USER_MUTATION = gql`
  mutation addUser($data: UserInput!) {
    addUser(data: $data) {
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
  }
`;
export default ADD_USER_MUTATION;
