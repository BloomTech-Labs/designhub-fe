import React, { useState } from 'react';
import { useWindowDimensions } from './useWindowDimensions.js';
import { Link, useParams } from 'react-router-dom';
import SendIcon from '../../../ASSETS/Icons/SendIcon';

import '../styles.scss';
import {
  GET_USER_BY_ID_QUERY,
  GET_PROJECT_BY_ID_QUERY,
} from '../../../graphql';

import { useForm } from 'react-hook-form';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ADD_COMMENT_MUTATION } from '../../../graphql';

const ProjectComments = ({ comments, modal }) => {
  const { handleSubmit, register } = useForm();

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

  const { id } = useParams();
  const { data: projectData } = useQuery(GET_PROJECT_BY_ID_QUERY, {
    variables: { id: id },
  });
  const { data: userData } = useQuery(GET_USER_BY_ID_QUERY, {
    variables: { id: projectData?.project?.userId },
  });

  console.log('object', id);
  const [addComments] = useMutation(ADD_COMMENT_MUTATION);

  //click submit
  const onSubmit = (data) => {
    addComments({
      variables: {
        data: {
          userId: userData?.user?.id,
          projectId: id,
          text: data.text,
        },
      },
      refetchQueries: [
        {
          query: GET_PROJECT_BY_ID_QUERY,
          variables: {
            id,
          },
        },
      ],
    });
  };

  return (
    <div className="project-comments">
      <header className="comments-header">Comments</header>
      <section className="comments-body">
        {comments &&
          comments.map((c) => (
            <div
              key={c.id}
              className={
                userData?.user?.id === c.userId
                  ? 'ProjectComment__body --them'
                  : 'ProjectComment__body --them'
              }
            >
              <Link
                className="username-avatar"
                to={`/profile/${c.userId}/${c.username}`}
              >
                <img
                  src={c.user.avatar}
                  alt="avatar"
                  className="ProjectComment__body__avatar"
                  style={{
                    width: '20px',
                    height: 'auto',
                    borderRadius: '50%',
                  }}
                />
                <strong>{c.user.username}</strong>
              </Link>
              <div className="ProjectComment__body__text">
                <Link
                  to={`/profile/${c.userId}/${c.username}`}
                  className="user-links"
                >
                  <p className="username">
                    {projectData?.project?.id === c.userId
                      ? `${c.username}`
                      : c.username}
                  </p>
                </Link>
                <p>{c.text}</p>
              </div>
            </div>
          ))}
        {/* this ref grabs the bottom of the comments display and scrolls it into view, automatically disabled at the column-view breakpoint */}
        <div ref={(el) => setCommentAnchor(el)}></div>
        {commentAnchor && !modal && scrollToBottom()}
      </section>

      <section className="comments-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-wrapper">
            <input
              ref={register}
              type="text"
              name="text"
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
