import gql from 'graphql-tag';

const DELETE_USER_MUTATION = gql`
  mutation deleteUser {
    deleteUser(id: "")
  }
`;
export default DELETE_USER_MUTATION;
