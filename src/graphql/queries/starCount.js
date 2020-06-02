//needs testing against data

import gql from 'graphql-tag';

const starCount = gql`
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

export default starCount;
