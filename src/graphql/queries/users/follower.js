//needs testing against data

import gql from 'graphql-tag';

const GET_FOLLOWER_BY_ID_QUERY = gql`
  query Followers($id: ID!) {
    follower(id: $id) {
      id
      followedId
      followingId
      created_at
    }
  }
`;
export default GET_FOLLOWER_BY_ID_QUERY;
