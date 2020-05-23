//needs testing against data

import gql from 'graphql-tags';

const followersFollowing = gql`
  query followersfollowing($followingId: Int!, $followedId: Int!) {
    followersfollowing(followingId: $followingId, followedId: $followedId)
  }
`;

export default followersFollowing;
