//needs testing against data

import gql from 'graphql-tag';

const GET_INVITE_BY_ID_QUERY = gql`
  query Invite($id: ID!) {
    getinvite(id: $id) {
      id
      activeUserId
      invitedUserId
      starredProjectsId
      commentsId
      projectId
      projectName
      imageId
      activeUserAvatar
      mainImgUrl
      commentText
      activeUserName
      teamId
      followersId
      type
      message
      unread
      created_at
    }
  }
`;

export default GET_INVITE_BY_ID_QUERY;
