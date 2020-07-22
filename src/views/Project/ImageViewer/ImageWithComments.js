import React, { useState, useRef } from 'react';
import { v1 as uuidv1 } from 'uuid';
import { StickyComment } from './StickyComments';
import { TempComment } from './TempComment';
import ModalXIcon from '../../../ASSETS/Icons/ModalXIcon.js';
//import postCommentNotification from './postCommentNotification';
import CommentBubbleIcon from '../../../ASSETS/Icons/CommentBubbleIcon.js';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_PROJECT_BY_ID_QUERY } from '../../../graphql';

import '../styles.scss';
import ProjectDetails from '../ProjectDetails';
import { useParams } from 'react-router-dom';

const ImageWithComments = ({ projectImg, closeModal }) => {
  const { id } = useParams();
  // const { id, url } = props.activeImg;
  const { data: projectData, error } = useQuery(GET_PROJECT_BY_ID_QUERY, {
    variables: { id: id },
  });
  console.log('IC', projectData);

  const [activeImg, setActiveImg] = useState([]);
  // console.log('comments', photoComments);

  const [hidden, setHidden] = useState(false);
  //comments are in the side bar
  //const [comments, setComments] = useState([]);
  //temp comments are sticky comments
  const [tempComments, setTempComments] = useState([]);
  const leftOffset = useRef(null);
  const topOffset = useRef(null);
  const element = useRef(null);

  let activeComments = projectData?.project?.comments;

  console.log('photocomms', activeComments);

  // useEffect(() => {
  //   // element.current;
  //   if (activeComments.id === activeImg.id)
  //     setComments({ comments: activeComments });
  // }, [activeComments]);

  // const projectComments = this.props.comments;
  // this.props.getPhotoComments(this.props.activeImg.id);
  // this.setState({
  //   ...this.state,
  //   comments: projectComments
  // });

  // useEffect(() => {
  //   addComments({
  //     variables: {
  //       data: {
  //         id: userData?.sub,
  //         projectId: userData?.id,
  //         text: userData?.text,
  //       },
  //     },
  //     refetchQueries: [
  //       {
  //         query: GET_PROJECT_BY_ID_QUERY,
  //         variables: { id: userData?.sub },
  //       },
  //     ],
  //   });
  // }, [gqlLoading, userData, ProjectDetails]);

  // function makeComment(id, x, y) {
  //   const newComment = {
  //     id: uuidv1(),
  //     imageId: id,
  //     // userId: props.activeUser.id,
  //     userId: userData.userId,
  //     // username: props.activeUser.username,
  //     username: projectImg.username,
  //     // projectId: props.thisProject.id,
  //     projectId: userData.projectId,
  //     editing: false,
  //     left: `${x}px`,
  //     top: `${y}px`,
  //     text: '',
  //   };
  //   setTempComments({ tempComments: newComment });
  // }

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
    // makeComment(id, x, y);
  }

  async function handleSubmit(e, c) {
    e.preventDefault();
    //const { comments } = comments;
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
          <div onClick={closeModal}>
            <ModalXIcon className="close" />
          </div>
        </section>
      </div>

      <div className="ImageWithComments">
        <img
          alt={projectData?.project?.mainImg}
          className="ImageWithComments__full-img"
          onClick={(e) => handleClick(e, id)}
          src={projectImg}
        />

        {/* {activeTemp &&
          activeTemp?.text?.map((c) => (
            <TempComment
              c={c}
              key={c.id}
              hidden={hidden}
              onSubmit={handleSubmit}
              // commentDelete={commentDelete}
              projectData={projectData}
            />
          ))}
        {activeComments[0] &&
          activeComments?.text?.map((s) => (
            <StickyComment
              {...s}
              hidden={hidden}
              key={s.id}
              //commentDelete={commentDelete}
            />
          ))} */}
      </div>
    </>
  );
};

export default ImageWithComments;
