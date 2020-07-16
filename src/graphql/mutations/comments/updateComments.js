import gql from 'graphql-tag';

const UPDATE_COMMENT_MUTATION = gql`
  mutation updateComments($data: UpdateCommentsInput!) {
    updateComments(data: $data) {
      id
      userId
      projectId
      text
    }
  }
`;
export default UPDATE_COMMENT_MUTATION;
