import gql from 'graphql-tag';

const DELETE_FOLLOWER_MUTATION = gql`
  mutation deleteFollower($data: AddFollowerInput!) {
    deleteFollower(data: $data)
  }
`;
export default DELETE_FOLLOWER_MUTATION;
