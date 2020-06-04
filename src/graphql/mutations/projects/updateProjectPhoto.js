import gql from 'graphql-tag';

const UPDATE_PROJECT_PHOTO_MUTATION = gql`
  mutation updateProjectPhoto($data: updateProjectPhotoInput!) {
    updateProjectPhoto(data: $data) {
      id
      url
      description
      title
      created_at
    }
  }
`;

export default UPDATE_PROJECT_PHOTO_MUTATION;
