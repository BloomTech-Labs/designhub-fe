import gql from 'graphql-tag';

const ADD_USER_MUTATION = gql`
  mutation addUser($data: UserInput!) {
    addUser(data: $data) {
      id
      firstName
      lastName
      username
      email
      location
      bio
      website
      avatar
    }
  }
`;
export default ADD_USER_MUTATION;
