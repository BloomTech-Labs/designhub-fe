import gql from 'graphql-tag';

const updateCategory = gql`
  mutation Categories($data: updateCategoryInput!) {
    updateCategory(data: $data) {
      id
      category
    }
  }
`;

export default updateCategory;
