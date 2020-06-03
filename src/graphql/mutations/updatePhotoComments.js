import gql from 'graphql-tag';

const updatePhotoComments = gql`
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

export default updatePhotoComments;
