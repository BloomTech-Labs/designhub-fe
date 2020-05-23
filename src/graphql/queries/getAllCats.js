//needs testing against data

import gql from 'graphql-tags';

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
