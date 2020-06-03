import gql from 'graphql-tag';

const deletePhotoComments = gql`
  mutation Comments($id: ID!) {
    deletePhotoComments(id: $id)
  }
`;
export default deletePhotoComments;
