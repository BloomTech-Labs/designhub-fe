import gql from 'graphql-tag';

const deleteProjectPhotos = gql`
  mutation deleteProjectPhotos($id: ID!) {
    deleteProjectPhotos(id: $id)
  }
`;
export default deleteProjectPhotos;
