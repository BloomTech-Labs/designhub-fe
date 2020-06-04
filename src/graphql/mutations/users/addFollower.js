import gql from 'graphql-tag';

const ADD_FOLLOWER_MUTATION = gql`
  mutation addFollower($data: addFollowerInput!) {
    addFollower(data: $data) {
      id
      followingId
      followedId
      created_at
    }
  }
`;

export default ADD_FOLLOWER_MUTATION;
