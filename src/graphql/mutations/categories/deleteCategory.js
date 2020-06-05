import gql from 'graphql-tag';

const DELETE_CATEGORY_MUTATION = gql`
  mutation deleteCategory($id: ID!) {
    deleteCategory(id: $id)
  }
`;

export default DELETE_CATEGORY_MUTATION;
