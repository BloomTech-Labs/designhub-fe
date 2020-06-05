import gql from 'graphql-tag';

const GET_ONE_PROJECT_PHOTO_QUERY = gql`
  query Project_photos($projectId: Int!) {
    projectphotosone(projectId: $projectId) {
      id
      projectId
      url
      description
      title
      created_at
    }
  }
`;

export default GET_ONE_PROJECT_PHOTO_QUERY;
