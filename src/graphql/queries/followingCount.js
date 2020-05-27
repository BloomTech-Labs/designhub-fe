//needs testing against data

import gql from 'graphql-tag';

const followingCount = gql`
  query Followers($id: ID!) {
    followingcount(id: $id) {
      id
      followedId
      followingId
      created_at
    }
  }
`;

export default followingCount;
