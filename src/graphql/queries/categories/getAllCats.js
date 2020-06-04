//needs testing against data

import gql from 'graphql-tag';

const GET_ALL_CATEGORIES_QUERY = gql`
  query Categories {
    getallcats {
      id
      categoryId
      category
    }
  }
`;

export default GET_ALL_CATEGORIES_QUERY;
