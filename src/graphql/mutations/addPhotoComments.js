import gql from 'gaphql-tag';

const addPhotoComments = gql`
  mutation Comments($data: PhotoCommentsInput!) {
    addPhotoComments(data: $data) {
      id
      userId
      projectId
      username
      imageId
      top
      left
      text
      created_at
    }
  }
`;
export default addPhotoComments;
