import React, { useState, useEffect, useRef } from 'react';

import { StickyComment } from './StickyComments';
import { TempComment } from './TempComment';
import ModalXIcon from '../../../ASSETS/Icons/ModalXIcon.js';
//import postCommentNotification from './postCommentNotification';
import CommentBubbleIcon from '../../../ASSETS/Icons/CommentBubbleIcon.js';
import { useQuery, useMutation } from '@apollo/react-hooks';

import '../styles.scss';

const uuidv1 = require('uuid/v1');

const ImageWithComments = (props) => {
  const { id, url } = props.activeImg;
  const [hidden, setHidden] = useState(false);
  //comments are in the side bar
  const [comments, setComments] = useState([]);
  //temp comments are sticky comments
  const [tempComments, setTempComments] = useState([]);
  const leftOffset = useRef(null);
  const topOffset = useRef(null);
  const element = useRef(null);

  let activeComments = props.photoComments;
  let activeTemp = tempComments.filter((c) => c.imageId === id);

  useEffect(() => {
    // element.current;
    const projectComments = props.comments;
    props.getPhotoComments(props.activeImg.id);
    setComments({ comments: projectComments });
  }, [props.comments]);

  function makeComment(id, x, y) {
    const newComment = {
      id: uuidv1(),
      imageId: id,
      userId: props.activeUser.id,
      username: props.activeUser.username,
      projectId: props.thisProject.id,
      editing: false,
      left: `${x}px`,
      top: `${y}px`,
      text: '',
    };
    setTempComments({ tempComments: newComment });
  }

  function updateElementPosition(x, y) {
    const rect = element.getBoundingClientRect();
    topOffset.current = rect.top > 0 ? y : y - rect.top;
    leftOffset.current = rect.left > 0 ? x : x - rect.left;
  }

  async function handleClick(e, id) {
    e.persist();
    let x = e.nativeEvent.clentX;
    let y = e.nativeEvent.clientY;
    await updateElementPosition(x, y);
    x = leftOffset.current;
    y = topOffset.current;
    makeComment(id, x, y);
  }

  async function handleSubmit(e, c) {
    e.preventDefault();
    const { comments } = comments;
    const thisComment = { ...c };

    //remove local state flags before submit to DB
    delete thisComment.id;
    delete thisComment.editing;

    //hook up rest with apallo when DB ready
  }
  return (
    <>
      <div className="StickyComments__TopBar" ref={element}>
        <p>Click anywhere on the image to leave a sticky comment</p>
        <section className="StickyComments__TopBar__Icons">
          <div
            className={hidden ? 'hidden' : null}
            onClick={() => setHidden({ hidden: !hidden })}
          >
            <CommentBubbleIcon />
          </div>
          <div onClick={props.closeModal}>
            <ModalXIcon className="close" />
          </div>
        </section>
      </div>

      <div className="ImageWithComments">
        <img
          alt={url}
          className="ImageWithComments__full-img"
          onClick={(e) => handleClick(e, id)}
          src={url}
        />

        {activeTemp[0] &&
          activeTemp.map((c) => (
            <TempComment
              c={c}
              key={c.id}
              hidden={hidden}
              onSubmit={handleSubmit}
              // commentDelete={commentDelete}
            />
          ))}
        {activeComments[0] &&
          activeComments.map((s) => (
            <StickyComment
              {...s}
              hidden={hidden}
              key={s.id}
              //commentDelete={commentDelete}
            />
          ))}
      </div>
    </>
  );
};

export default ImageWithComments;
