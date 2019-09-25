import React from 'react';
import { findDOMNode } from 'react-dom';

import { StickyComment } from './StickyComment';
import { TempComment } from './TempComment';
import '../../SASS/StickyComment.scss';

const uuidv1 = require('uuid/v1');

export class ImageWithComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      tempComments: [],
      activeImg: this.props.activeImg
    };
    this.element = null;
    this.width = null;
    this.height = null;
    this.left = null;
    this.leftOffset = null;
    this.top = null;
    this.topOffset = null;
  }

  render() {
    const { id, url } = this.props.activeImg;
    const { comments, tempComments } = this.state;
    let activeComments = comments.filter(c => c.img_id === id);
    let activeTemp = tempComments.filter(c => c.img_id === id);
    return (
      <div className="ImageWithComments">
        <img
          src={url}
          alt={url}
          // onMouseMove={this.onMouseMove}
          onClick={e => this.handleClick(e, id)}
        />

        {activeTemp[0] &&
          activeTemp.map(c => (
            <TempComment
              c={c}
              key={c.id}
              onSubmit={this.handleSubmit}
              commentDelete={this.commentDelete}
            />
          ))}

        {activeComments[0] &&
          activeComments.map(s => (
            <StickyComment
              {...s}
              key={s.id}
              commentDelete={this.commentDelete}
            />
          ))}
      </div>
    );
  }
  componentDidMount() {
    this.element = findDOMNode(this);
    console.log(this.element);
    // GET ALL COMMENTS
    const projectComments = this.props.comments;
    this.setState({
      ...this.state,
      projectComments
    });
  }

  commentDelete = id => {
    let updateTemp = this.state.tempComments.filter(i => i.id !== id);
    let updateComments = this.state.comments.filter(i => i.id !== id);
    this.setState({
      ...this.state,
      tempComments: updateTemp,
      comments: updateComments
    });
  };

  commentEdit = id => {
    let updateComments = this.state.comments.map(i => {
      if (i.id === id) return { ...i, editing: true };
      else return { ...i, editing: false };
    });
    this.setState({
      ...this.state,
      comments: updateComments
    });
  };

  makeComment = (id, x, y) => {
    console.log({ x, y });
    const newComment = {
      id: uuidv1(),
      img_id: id,
      editing: false,
      left: `${x}px`,
      top: `${y}px`,
      text: ''
    };
    this.setState({
      ...this.state,
      tempComments: [...this.state.tempComments, newComment]
    });
  };

  handleClick = async (e, id) => {
    e.persist();
    let x = e.nativeEvent.clientX;
    let y = e.nativeEvent.clientY;
    await this.updateElementPosition(x, y);
    x = this.leftOffset;
    y = this.topOffset;
    this.makeComment(id, x, y);
  };

  handleSubmit = (e, c) => {
    e.preventDefault();
    const { comments, tempComments } = this.state;
    let updateTemp = tempComments.filter(i => i.id !== c.id);
    let updateComments = [...comments];
    if (updateComments.find(i => i.id === c.id)) {
      updateComments = comments.map(i => {
        if (i.id === c.id) return { ...c };
        else return { ...i, editing: false };
      });
    } else updateComments.push(c);
    this.setState({
      ...this.state,
      tempComments: updateTemp,
      comments: updateComments
    });
  };

  updateElementPosition = (x, y) => {
    console.log('!!! UPDATE ELEMENT POSITION');
    console.log({ x, y });
    const rect = this.element.getBoundingClientRect();
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;

    this.topOffset = rect.top > 0 ? y : y - rect.top;
    this.leftOffset = rect.left > 0 ? x : x - rect.left;

    console.log('this.element.getBoundingClientRect()', rect);
    // console.log('OFFSET WIDTH', this.element.offsetWidth);
    // console.log('OFFSET HEIGHT', this.element.offsetHeight);
    // console.log('TOP OFFSET',this.topOffset)

    console.log('this.element.offsetLeft', this.element.offsetLeft);
    console.log('this.element.scrollLeft', this.element.scrollLeft);
    console.log('this.element.offsetTop', this.element.offsetTop);
    console.log('this.element.scrollTop', this.element.scrollTop);
    console.log('this.element.offsetParent', this.element.offsetParent);

    let newPos = getPosition(this.element);
    console.log('newPos', newPos);

    function getPosition(el) {
      var xPos = 0;
      var yPos = 0;

      while (el) {
        if (el.tagName === 'BODY') {
          // deal with browser quirks with body/window/document and page scroll
          var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
          var yScroll = el.scrollTop || document.documentElement.scrollTop;

          xPos += el.offsetLeft - xScroll + el.clientLeft;
          yPos += el.offsetTop - yScroll + el.clientTop;
        } else {
          // for all other non-BODY elements
          xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
          yPos += el.offsetTop - el.scrollTop + el.clientTop;
        }
        console.log('el', el);
        el = el.offsetParent;
      }
      return {
        x: xPos,
        y: yPos
      };
    }
  };
}
