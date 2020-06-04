import gql from 'graphql-tag';

const DELETE_PHOTO_COMMENT_MUTATION = gql`
  mutation Comments($id: ID!) {
    deletePhotoComments(id: $id)
  }
`;
export default DELETE_PHOTO_COMMENT_MUTATION;
