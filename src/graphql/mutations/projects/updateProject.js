import gql from 'graphql-tag';

const UPDATE_PROJECT_MUTATION = gql`
  mutation Projects($data: updateProjectInput!) {
    updateProject(data: $data) {
      id
      userId
      privateProjects
      name
      description
    }
  }
`;
export default UPDATE_PROJECT_MUTATION;
