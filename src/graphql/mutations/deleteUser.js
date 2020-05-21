import gql from 'graphql';

const deleteUser = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
export default deleteUser;
