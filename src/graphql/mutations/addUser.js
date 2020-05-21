import gql from 'graphql-tag';

const addUser = gql`
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
export default addUser;
