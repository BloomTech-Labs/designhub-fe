import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';

const postCommentNotification = async (
  username,
  commentText,
  projectId,
  invitedUserId,
  activeUserId,
  mainImgUrl,
  commentsId,
  activeUserAvatar,
  type
) => {
  axiosWithAuth().post('api/v1/invite/comments', {
    activeUsername: username,
    commentText: commentText,
    projectId: projectId,
    invitedUserId: invitedUserId,
    activeUserId: activeUserId,
    mainImgUrl: mainImgUrl,
    commentsId: commentsId,
    activeUserAvatar: activeUserAvatar,
    type: type,
  });
};

export default postCommentNotification;
