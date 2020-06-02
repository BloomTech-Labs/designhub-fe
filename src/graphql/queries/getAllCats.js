//needs testing against data

import gql from 'graphql-tag';

const getAllCats = gql`
  query Categories {
    getallcats {
      id
      categoryId
      category
    }
  }
`;

export default getAllCats;
