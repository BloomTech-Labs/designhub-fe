import React, { useState } from 'react';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';
import { connect } from 'react-redux';
import { useWindowDimensions } from './useWindowDimensions.js';
import { Link } from 'react-router-dom';
import SendIcon from '../../common/Icons/SendIcon';

import { addProjectComment } from '../../store/actions';

import './SASS/ProjectComments.scss';

const ProjectComments = ({
  activeUser,
  comments,
  modal,
  thisProject,
  addProjectComment
}) => {
  //custom hook to get window height/width
  const { width } = useWindowDimensions();
  // ref for bottom of comments feed
  const [commentAnchor, setCommentAnchor] = useState(null);
  //function to autoscroll to commentAnchor
  const scrollToBottom = () => {
    //scroll comments window ONLY at desktop widths
    if (width <= 1024) return;
    else commentAnchor.scrollIntoView({ behavior: 'smooth' });
  };

  //local state for form input
  const [newComment, setNewComment] = useState('');

  //function for sending comment notifications

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
      type: type
    });
  };

  //click submit
  const handleSubmit = async e => {
    e.preventDefault();
    if (!newComment) return; //dont submit blank comments

    const thisComment = {
      userId: activeUser.id,
      username: activeUser.username,
      projectId: thisProject.id,
      text: newComment
    };

    try {
      const res = await addProjectComment(thisComment);
      const newComment = res.data.data[0];

      if (thisProject.id !== activeUser.id) {
        await postCommentNotification(
          activeUser.username,
          newComment.text,
          thisProject.id,
          thisProject.userId,
          activeUser.id,
          thisProject.mainImg,
          newComment.id,
          activeUser.avatar,
          'comment'
        );
      }

      //glue the avatar back on and insert into local state so we don't have to reload the component
      setNewComment('');
    } catch (err) {
      console.log('ProjectComments.js handleSubmit() ERROR', err);
    }
  };

  return (
    <div className="project-comments">
      <header className="comments-header">Comments</header>
      <section className="comments-body">
        {comments &&
          comments.map(c => (
            <div
              key={c.id}
              className={
                activeUser.id === c.userId
                  ? 'ProjectComment__body --you'
                  : 'ProjectComment__body --them'
              }
            >
              {activeUser.id === c.userId ? null : (
                <Link to={`/profile/${c.userId}/${c.username}`}>
                  <img
                    src={c.userAvatar}
                    alt="avatar"
                    className="ProjectComment__body__avatar"
                  />
                </Link>
              )}
              <div className="ProjectComment__body__text">
                <Link
                  to={`/profile/${c.userId}/${c.username}`}
                  className="user-links"
                >
                  <p className="username">
                    {activeUser.id === c.userId ? `${c.username}` : c.username}
                  </p>
                </Link>
                <p>{c.text}</p>
              </div>
            </div>
          ))}
        {/* this ref grabs the bottom of the comments display and scrolls it into view, automatically disabled at the column-view breakpoint */}
        <div ref={el => setCommentAnchor(el)}></div>
        {commentAnchor && !modal && scrollToBottom()}
      </section>

      <section className="comments-form">
        <form onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <input
              type="text"
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              placeholder="Leave a comment..."
            />
            <button>
              <SendIcon />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments.projectComments
  };
};

export default connect(
  mapStateToProps,
  { addProjectComment }
)(ProjectComments);
