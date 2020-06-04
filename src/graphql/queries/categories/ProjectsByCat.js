//needs testing against data

import gql from 'graphql-tag';

const GET_PROJECTS_BY_CATEGORY_ID_QUERY = gql`
  query Categories($categoryId: ID!) {
    projectsbycat(categoryId: $categoryId) {
      id
      categoryId
      category
    }
  }
`;

export default GET_PROJECTS_BY_CATEGORY_ID_QUERY;
