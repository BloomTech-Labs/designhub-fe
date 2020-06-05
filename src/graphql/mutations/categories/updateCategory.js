import gql from 'graphql-tag';

const UPDATE_CATEGORY_MUTATION = gql`
  mutation Categories($data: updateCategoryInput!) {
    updateCategory(data: $data) {
      id
      category
    }
  }
`;

export default UPDATE_CATEGORY_MUTATION;
