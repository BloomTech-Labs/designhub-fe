//needs testing against data

import gql from 'graphql-tag';

const projectsByCat = gql`
  query Categories($categoryId: ID!) {
    projectsbycat(categoryId: $categoryId) {
      id
      categoryId
      category
    }
  }
`;

export default projectsByCat;
