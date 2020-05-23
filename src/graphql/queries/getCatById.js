//needs testing against data

import gql from 'graphql-tags';

const getCatById = gql`
  query Categories($id: ID!) {
    getcatbyid(id: $id) {
      id
      categoryId
      category
    }
  }
`;

export default getCatById;
