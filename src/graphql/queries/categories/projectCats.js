import gql from 'graphql-tag';

//needs testing

const GET_PROJECT_CATEGORIES_QUERY = gql`
  query Categories($id: ID!) {
    projectcats(id: $id) {
      id
      categoryId
      category
    }
  }
`;

export default GET_PROJECT_CATEGORIES_QUERY;
