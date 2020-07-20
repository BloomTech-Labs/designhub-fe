import gql from 'graphql-tag';

const GET_ALL_PROJECTS_QUERY = gql`
  query Project {
    projects {
      id
      userId
      private
      name
      description
      figma
      category
      invision
      mainImg
      created_at
      updated_at
      photos {
        id
        projectId
        url
        description
        title
        created_at
      }
      comments {
        id
        userId
        projectId
        text
        created_at
        user {
          id
          username
        }
      }
    }
  }
`;
export default GET_ALL_PROJECTS_QUERY;
