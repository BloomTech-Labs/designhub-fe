import gql from 'graphql-tag';

const updateProject = gql`
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
export default updateProject;
