import gql from 'graphql-tag';

const UPDATE_PROJECT_INVITE_MUTATION = gql`
  mutation updateProjectInvite($data: updateProjectInviteInput!) {
    updateProjectInvite(data: $data) {
      id
      email
      projectId
      created_at
      updated_at
    }
  }
`;

export default UPDATE_PROJECT_INVITE_MUTATION;
