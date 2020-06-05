import gql from 'graphql-tag';

const DELETE_PROJECT_INVITE_MUTATION = gql`
  mutation Invite($id: ID!) {
    deleteProjectInvite(id: $id)
  }
`;

export default DELETE_PROJECT_INVITE_MUTATION;
