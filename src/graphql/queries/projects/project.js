import gql from 'graphql-tag';

const GET_PROJECT_BY_ID_QUERY = gql`
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
export default GET_PROJECT_BY_ID_QUERY;
