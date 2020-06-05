import gql from 'graphql-tag';

const DELETE_INVITE_MUTATION = gql`
  mutation deleteInvite($id: ID!) {
    deleteInvite(id: $id)
  }
`;

export default DELETE_INVITE_MUTATION;
