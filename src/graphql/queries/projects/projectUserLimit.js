import gql from 'graphql-tag';

const GET_USER_PROJECTS_LIMIT_QUERY = gql`
  query Projects($userId: ID!) {
    projectuserlimit(userId: $userId) {
      userId
      privateProjects
      name
      description
      figma
      invision
      created_at
      mainImg
    }
  }
`;

export default GET_USER_PROJECTS_LIMIT_QUERY;
