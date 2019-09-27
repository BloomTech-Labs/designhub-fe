import React, { useState } from 'react';
import axios from 'axios';
import SendIcon from '../Icons/SendIcon';

const ProjectComments = ({
  activeUser,
  addComments,
  comments,
  thisProject
}) => {
  // console.log('ProjectComments.js RENDER comments', comments);
  // console.log('ProjectComments.js RENDER activeUser', activeUser);

  // ref for bottom of comments feed
  const [commentAnchor, setCommentAnchor] = useState(null);
  //function to autoscroll to commentAnchor
  const scrollToBottom = () => {
    commentAnchor.scrollIntoView({ behavior: 'smooth' });
  };

  //local state for form input
  const [newComment, setNewComment] = useState('');

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
    // console.log('ProjectComments.js handleSubmit() thisCOmment', thisComment);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/v1/comments/project`,
        thisComment
      );
      const newComment = res.data.data[0];

      //glue the avatar back on and insert into local state so we don't have to reload the component
      newComment.userAvatar = activeUser.avatar;
      const updateComments = [...comments, newComment];
      addComments(updateComments);
      setNewComment('');
    } catch (err) {
      console.log('ProjectComments.js handleSubmit() ERROR', err);
    }
  };

  return (
    <div className="project-comments">
      <div className="comments-header">Comments</div>
      <div className="comments-body">
        {commentAnchor && scrollToBottom()}
        {comments.map(comment => (
          <div
            key={comment.id}
            className={
              activeUser.id === comment.userId ? 'comment' : 'comment-li-user'
            }
          >
            <img src={comment.userAvatar} alt="avatar" className="avatar" />
            {activeUser.id === comment.userId ? (
              <p className="you">You</p>
            ) : null}
            <p className="message">{comment.text}</p>
          </div>
        ))}
        <div ref={el => setCommentAnchor(el)}></div>
      </div>
      <div className="comments-form">
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
      </div>
    </div>
  );
};

export default ProjectComments;
