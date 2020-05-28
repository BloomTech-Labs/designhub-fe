import gql from 'graphql-tag';

const projectUserLimit = gql`
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

export default projectUserLimit;
