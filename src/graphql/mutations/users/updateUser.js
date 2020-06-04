import gql from 'graphql-tag';

const UPDATE_USER_MUTATION = gql`
  mutation updateUser($data: updateUserInput!) {
    updateUser(data: $data) {
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
  }
`;
export default UPDATE_USER_MUTATION;
