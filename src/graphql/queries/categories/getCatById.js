//needs testing against data

import gql from 'graphql-tag';

const GET_CATEGORY_BY_ID_QUERY = gql`
  query Categories($id: ID!) {
    getcatbyid(id: $id) {
      id
      categoryId
      category
    }
  }
`;

export default GET_CATEGORY_BY_ID_QUERY;
