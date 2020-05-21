import gql from 'graphql-tag';

const project = gql`
  query Project($id: ID!) {
    project(id: $id) {
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
export default project;
