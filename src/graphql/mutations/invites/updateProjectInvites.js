import gql from 'graphql-tag';

const UPDATE_PROJECT_INVITES_MUTATION = gql`
  mutation updateProjectInvites($data: updateProjectInviteInput!) {
    updateProjectInvites(data: $data) {
      id
      email
      projectId
      created_at
      updated_at
    }
  }
`;

export default UPDATE_PROJECT_INVITES_MUTATION;
