import gql from 'graphql-tag';

const DELETE_FOLLOWER_MUTATION = gql`
  mutation deleteFollower($id: ID!) {
    deleteFollower(id: $id)
  }
`;

export default DELETE_FOLLOWER_MUTATION;
