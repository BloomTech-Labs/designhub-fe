import gql from 'graphql-tag';

const projectUser = gql`
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

export default projectUser;
