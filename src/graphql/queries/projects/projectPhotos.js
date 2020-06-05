import gql from 'graphql-tag';

const GET_PROJECT_PHOTOS_QUERY = gql`
  query Project_photos($projectId: Int!) {
    projectphotos(projectId: $projectId) {
      id
      projectId
      url
      description
      title
      created_at
    }
  }
`;

export default GET_PROJECT_PHOTOS_QUERY;
