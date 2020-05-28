import gql from 'graphql-tag';

const projectPhotoOne = gql`
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

export default projectPhotoOne;
