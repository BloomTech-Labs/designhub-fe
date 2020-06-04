import gql from 'graphql-tag';

const GET_FOLLOWER_COUNT = gql`
  query Followers($id: ID!) {
    followercount(id: $id) {
      id
      followingId
      followedId
      created_at
    }
  }
`;

export default GET_FOLLOWER_COUNT;
