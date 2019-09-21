import React, { Component } from 'react';

import SendIcon from './Icons/SendIcon';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const comments = this.props.comment;
    const activeUser = this.props.activeUser;
    return (
      <div className="project-comments">
        <div className="comments-header">Comments</div>
        <div className="comments-body">
          {comments.map(comment => (
            <div
              className={
                activeUser.id === comment.id ? 'comment' : 'comment-li-user'
              }
            >
              <img
                src={comment.userAvatar}
                alt="avatar"
                className="avatar"
                key={comment.id}
              />
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
              <textarea type="text" placeholder="Leave a comment..." />
              <button>
                <SendIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Comments;
