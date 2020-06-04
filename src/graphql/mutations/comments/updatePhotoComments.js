import gql from 'graphql-tag';

const UPDATE_PHOTO_COMMENT_MUTATION = gql`
  mutation Comments($data: updatePhotoCommentsInput!) {
    updatePhotoComments(data: $data) {
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

export default UPDATE_PHOTO_COMMENT_MUTATION;
