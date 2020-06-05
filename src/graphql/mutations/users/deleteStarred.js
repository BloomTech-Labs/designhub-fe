import gql from 'graphql-tag';

const DELETE_STARED_MUTATION = gql`
  mutation deleteStarred($data: CategoryInput!) {
    deleteStarred(data: $data) {
      id
      category
    }
  }
`;

export default DELETE_STARED_MUTATION;
