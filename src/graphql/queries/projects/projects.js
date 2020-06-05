import gql from 'graphql-tag';

const GET_ALL_PROJECTS_QUERY = gql`
  query Projects {
    projects {
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

export default GET_ALL_PROJECTS_QUERY;
