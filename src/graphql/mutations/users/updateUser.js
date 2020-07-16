import gql from 'graphql-tag';

const UPDATE_USER_MUTATION = gql`
  mutation updateUser($data: UserInput!) {
    updateUser(data: $data) {
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
export default UPDATE_USER_MUTATION;
