import gql from 'graphql-tag';

const DELETE_COMMENTS_MUTATION = gql`
  mutation deleteComments($id: ID!) {
    deleteComments(id: $id)
  }
`;

export default DELETE_COMMENTS_MUTATION;
