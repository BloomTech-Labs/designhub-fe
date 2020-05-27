import gql from 'graphql-tags';

const updateComments = gql`
  mutation Comments($data: CommentsInput!) {
    addComments(data: $data) {
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

export default updateComments;
