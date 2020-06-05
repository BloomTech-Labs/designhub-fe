import gql from 'graphql-tag';

const DELETE_USER_MUTATION = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
export default DELETE_USER_MUTATION;
