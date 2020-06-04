import gql from 'graphql-tag';

const UPDATE_COMMENT_MUTATION = gql`
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

export default UPDATE_COMMENT_MUTATION;
