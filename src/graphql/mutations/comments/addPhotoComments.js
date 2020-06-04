import gql from 'gaphql-tag';

const ADD_PHOTO_COMMENT_MUTATION = gql`
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
export default ADD_PHOTO_COMMENT_MUTATION;
