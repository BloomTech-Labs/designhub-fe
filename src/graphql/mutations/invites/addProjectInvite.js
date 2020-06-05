import gql from 'graphql-tag';

const ADD_PROJECT_INVITE_MUTATION = gql`
  mutation addProjectInvite($data: addProjectInviteInput!) {
    addProjectInvite(data: $data) {
      id
      email
      projectId
      created_at
      updated_at
    }
  }
`;

export default ADD_PROJECT_INVITE_MUTATION;
