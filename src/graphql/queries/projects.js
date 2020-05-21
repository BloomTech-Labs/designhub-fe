import gql from 'graphql-tag';

const projects = gql`
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

export default projects;
