//needs testing against data

import gql from 'graphql-tag';

const IS_FOLLOWER_FOLLOWING_QUERY = gql`
  query followersfollowing($followingId: Int!, $followedId: Int!) {
    followersfollowing(followingId: $followingId, followedId: $followedId)
  }
`;

export default IS_FOLLOWER_FOLLOWING_QUERY;
