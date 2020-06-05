import gql from 'graphql-tag';

const ADD_CATEGORY_MUTATION = gql`
  mutation addCategory($data: CategoryInput!) {
    addCategory(data: $data) {
      id
      category
    }
  }
`;

export default ADD_CATEGORY_MUTATION;
