import gql from 'graphql-tag';

const ADD_INVITE_COMMENTS_QUERY = gql`
  mutation addInviteComments($data: InviteInput!) {
    addInviteComments(data: $data) {
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

export default ADD_INVITE_COMMENTS_QUERY;
