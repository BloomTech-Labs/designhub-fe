import gql from 'gaphql-tag';

const ADD_PROJECT_MUTATION = gql`
  mutation Projects($data: ProjectInput!) {
    addProject(data: $data) {
      id
      userId
      privateProjects
      name
      description
      figma
      invision
      created_at
      updated_at
      mainImg
    }
  }
`;
export default ADD_PROJECT_MUTATION;
