import gql from 'graphql-tags';

const followerCount = gql`
  query Followers($id: ID!) {
    followercount(id: $id) {
      id
      followingId
      followedId
      created_at
    }
  }
`;

export default followerCount;
