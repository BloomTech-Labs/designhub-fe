import gql from 'graphql-tag';

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
