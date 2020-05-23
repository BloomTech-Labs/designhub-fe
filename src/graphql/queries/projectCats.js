import gql from 'graphql-tags';

//needs testing

const projectCats = gql`
  query Categories($id: ID!) {
    projectcats(id: $id) {
      id
      categoryId
      category
    }
  }
`;

export default projectCats;
