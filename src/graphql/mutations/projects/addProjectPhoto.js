import gql from 'graphql-tag';

const ADD_PROJECT_PHOTO_MUTATION = gql`
  mutation addProjectPhoto($data: ProjectPhotoInput!) {
    addProjectPhoto(data: $data) {
      id
      projectId
      description
      title
      url
    }
  }
`;
export default ADD_PROJECT_PHOTO_MUTATION;
