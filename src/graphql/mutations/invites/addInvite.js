import gql from 'graphql-tag';

const ADD_INVITE_MUTATION = gql`
  mutation addInvite($data: InviteInput!) {
    addInvite(data: $data) {
      activeUserId
      invitedUserId
      activeUserAvatar
      activeUsername
    }
  }
`;

export default ADD_INVITE_MUTATION;
