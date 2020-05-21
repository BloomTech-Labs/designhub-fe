import gql from 'gaphql-tags';

const addProject = gql`
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
export default addProject;
