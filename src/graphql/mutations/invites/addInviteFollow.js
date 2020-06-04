import gql from 'graphql-tag';

const ADD_INVITE_FOLLOW_MUTATION = gql`
  mutation addInviteStarred($data: InviteInput!) {
    addInviteStarred(data: $data) {
      id
      activeUserId
      invitedUserId
      starredProjectsId
      commentsId
      projectId
      projectName
      imageId
      activeUserAvatar
      activeUsername
      mainImgUrl
      commentText
      teamId
      followersId
      type
      message
      unread
      created_at
    }
  }
`;

export default ADD_INVITE_FOLLOW_MUTATION;
