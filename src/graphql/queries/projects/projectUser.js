import gql from 'graphql-tag';

const GET_USER_PROJECTS_QUERY = gql`
  query Projects($id: ID!) {
    projectuser(userId: $id) {
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

export default GET_USER_PROJECTS_QUERY;
