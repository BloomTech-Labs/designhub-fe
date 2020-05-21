import gql from 'graphql-tags';

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
