//needs testing against data

import gql from 'graphql-tag';

const GET_STAR_COUNT_QUERY = gql`
  query Starred($id: ID!) {
    starcount(id: $id) {
      id
      userId
      projectId
      count
      created_at
    }
  }
`;

export default GET_STAR_COUNT_QUERY;
