import gql from 'graphql-tag';

const DELETE_PROJECT_PHOTO_MUTATION = gql`
  mutation deleteProjectPhoto {
    deleteProjectPhoto(id: "3")
  }
`;
export default DELETE_PROJECT_PHOTO_MUTATION;
