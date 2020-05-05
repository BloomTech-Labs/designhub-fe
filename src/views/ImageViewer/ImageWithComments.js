import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';
import { connect } from 'react-redux';

import { StickyComment } from './StickyComment';
import { TempComment } from './TempComment';
import ModalXIcon from '../../common/Icons/ModalXIcon.js';
import CommentBubbleIcon from '../../common/Icons/CommentBubbleIcon.js';
import './SASS/StickyComment.scss';

import {
  addPhotoComment,
  getPhotoComments,
  getProjectComments
} from '../../store/actions';
const uuidv1 = require('uuid/v1');

class ImageWithComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: this.props.activeImg,
      comments: [],
      hidden: false,
      tempComments: []
    };
    //location of the dom node, this is definitely a better way to do this using refs
    this.element = null;
    this.leftOffset = null;
    this.topOffset = null;
  }

  render() {
    const { id, url } = this.props.activeImg;
    const { hidden, tempComments } = this.state;
    //activeComments are EXISTING COMMENTS related to the current image
    let activeComments = this.props.photoComments;
    // tempComments are the sticky comment submit form
    let activeTemp = tempComments.filter(c => c.imageId === id);
    return (
      <>
        <div className="StickyComments__TopBar">
          <p>Click anywhere on the image to leave a sticky comment</p>
          <section className="StickyComments__TopBar__Icons">
            <div
              className={hidden ? 'hidden' : null}
              onClick={() => this.setState({ hidden: !this.state.hidden })}
            >
              <CommentBubbleIcon />
            </div>
            <div onClick={this.props.closeModal}>
              <ModalXIcon className="close" />
            </div>
          </section>
        </div>

        <div className="ImageWithComments">
          <img
            alt={url}
            className="ImageWithComments__full-img"
            onClick={e => this.handleClick(e, id)}
            src={url}
          />

          {activeTemp[0] &&
            activeTemp.map(c => (
              <TempComment
                c={c}
                key={c.id}
                hidden={this.state.hidden}
                onSubmit={this.handleSubmit}
                commentDelete={this.commentDelete}
              />
            ))}
          {activeComments[0] &&
            activeComments.map(s => (
              <StickyComment
                {...s}
                hidden={this.state.hidden}
                key={s.id}
                commentDelete={this.commentDelete}
              />
            ))}
        </div>
      </>
    );
  }
  componentDidMount() {
    //refactor this into refs?
    this.element = findDOMNode(this);
    // GET ALL COMMENTS
    const projectComments = this.props.comments;
    this.props.getPhotoComments(this.props.activeImg.id);
    this.setState({
      ...this.state,
      comments: projectComments
    });
  }

  makeComment = (id, x, y) => {
    const newComment = {
      id: uuidv1(),
      imageId: id,
      userId: this.props.activeUser.id,
      username: this.props.activeUser.username,
      projectId: this.props.thisProject.id,
      editing: false,
      // left&top are coordinates used to render the sticky comment dot, they are in relation to the dom element (this.element)
      left: `${x}px`,
      top: `${y}px`,
      text: ''
    };
    this.setState({
      ...this.state,
      tempComments: [newComment]
    });
  };

  handleClick = async (e, id) => {
    e.persist();
    //grab the mouseclick location and apply offset from the parent dom node, there is probably a better way to do this
    let x = e.nativeEvent.clientX;
    let y = e.nativeEvent.clientY;
    await this.updateElementPosition(x, y);
    x = this.leftOffset;
    y = this.topOffset;
    this.makeComment(id, x, y);
  };

  postCommentNotification = async (
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

  handleSubmit = async (e, c) => {
    e.preventDefault();
    const { comments } = this.state;
    const thisComment = { ...c };

    // delete local state flags before submitting to database
    delete thisComment.id;
    delete thisComment.editing;

    try {
      const res = await this.props.addPhotoComment(thisComment);
      const newComment = res.data.data[0];
      const updateComments = [...comments, newComment];
      this.props.getPhotoComments(this.props.activeImg.id);
      this.props.getProjectComments(this.props.thisProject.id);
      this.setState({
        ...this.state,
        tempComments: [],
        comments: updateComments
      });

      if (this.props.activeUser.id !== this.props.thisProject.userId) {
        await this.postCommentNotification(
          this.props.activeUser.username,
          newComment.text,
          this.props.thisProject.id,
          this.props.thisProject.userId,
          this.props.activeUser.id,
          this.props.activeImg.url,
          newComment.id,
          this.props.activeUser.avatar,
          'comment'
        );
      }
    } catch (err) {
      console.log('ImageWithComments.js handleSubmit() ERROR', err);
    }
  };

  updateElementPosition = (x, y) => {
    //get the size of the dom element
    const rect = this.element.getBoundingClientRect();
    // compensate for window scroll position
    this.topOffset = rect.top > 0 ? y : y - rect.top;
    this.leftOffset = rect.left > 0 ? x : x - rect.left;
  };
}

const mapStateToProps = state => {
  return {
    photoComments: state.comments.photoComments
  };
};

export default connect(
  mapStateToProps,
  { addPhotoComment, getPhotoComments, getProjectComments }
)(ImageWithComments);
