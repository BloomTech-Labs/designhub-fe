//needs testing against data

import gql from 'graphql-tag';

const following = gql`
  query Followers($id: ID!) {
    following(id: $id) {
      id
      followedId
      followingId
      created_at
    }
  }
`;

export default following;
