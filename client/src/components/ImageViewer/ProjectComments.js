import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import SendIcon from '../Icons/SendIcon';
import '../../SASS/ProjectComments.scss';

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
      <header className="comments-header">Comments</header>

      <section className="comments-body">
        {commentAnchor && scrollToBottom()}

        {comments.map(c => (
          <div className="ProjectComment__wrapper">
            <section
              className={
                activeUser.id === c.userId
                  ? 'ProjectComment__body --you'
                  : 'ProjectComment__body --them'
              }
            >
              {activeUser.id === c.userId ? null : (
                <img
                  src={c.userAvatar}
                  alt="avatar"
                  className="ProjectComment__body__avatar"
                />
              )}
              <div className="ProjectComment__body__text">
                <header>
                  <em>{activeUser.id === c.userId ? 'You' : c.username}</em>
                  {/* <p>{moment(c.created_at).fromNow()}</p> */}
                </header>
                <p>{c.text}</p>
              </div>
            </section>
          </div>
        ))}

        <div ref={el => setCommentAnchor(el)}></div>
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

export default ProjectComments;
