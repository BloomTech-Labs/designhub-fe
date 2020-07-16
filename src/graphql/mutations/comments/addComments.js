import gql from 'graphql-tag';

const ADD_COMMENT_MUTATION = gql`
  mutation addComments($data: CommentsInput!) {
    addComments(data: $data) {
      userId
      projectId
      text
    }
  }
`;
export default ADD_COMMENT_MUTATION;
