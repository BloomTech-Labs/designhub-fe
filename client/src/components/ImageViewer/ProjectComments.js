import React from 'react';
import SendIcon from '../Icons/SendIcon';

const ProjectComments = ({ activeUser, comments }) => {
  return (
    <div className="project-comments">
      <div className="comments-header">Comments</div>
      <div className="comments-body">
        {comments.map(comment => (
          <div
            key={comment.id}
            className={
              activeUser.id === comment.id ? 'comment' : 'comment-li-user'
            }
          >
            <img src={comment.userAvatar} alt="avatar" className="avatar" />
            {activeUser.id === comment.user_id ? (
              <p className="you">You</p>
            ) : null}
            <p className="message">{comment.text}</p>
          </div>
        ))}
      </div>
      <div className="comments-form">
        <form>
          <div className="form-wrapper">
            <input type="text" placeholder="Leave a comment..." />
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
