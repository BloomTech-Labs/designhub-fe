import gql from 'graphql-tag';

const addProjectPhoto = gql`
  mutation Project_photos($data: ProjectPhotoInput!) {
    addProjectPhoto(data: $data) {
      id
      projectId
      url
      description
      title
      created_at
    }
  }
`;

export default addProjectPhoto;
