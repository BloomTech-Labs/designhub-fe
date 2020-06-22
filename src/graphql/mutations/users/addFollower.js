import gql from 'graphql-tag';

const ADD_FOLLOWER_MUTATION = gql`
  mutation addFollower($data: AddFollowerInput!) {
    addFollower(data: $data)
  }
`;
export default ADD_FOLLOWER_MUTATION;
