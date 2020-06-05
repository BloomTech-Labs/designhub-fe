import gql from 'graphql-tag';

const ADD_PROJECT_PHOTO_MUTATION = gql`
  mutation Project_photos($data: ProjectPhotoInput!) {
    addProjectPhoto(data: $data) {
      id
      projectId
      url
      description
      title
      created_at
    }
  }
`;

export default ADD_PROJECT_PHOTO_MUTATION;
