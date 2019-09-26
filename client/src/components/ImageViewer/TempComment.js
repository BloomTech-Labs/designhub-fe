import React from 'react';
import SendIcon from '../Icons/SendIcon.js';

export class TempComment extends React.Component {
  state = {
    comment: ''
  };

  render() {
    const { comment } = this.state;
    const { c } = this.props;
    const { top, left } = c;
    return (
      <>
        <div
          className="StickyComment__hover-space"
          style={{
            top: top,
            left: left
          }}
        >
          <section className="StickyComment__dot">
            <div className="StickyComment__dot-center"> </div>
          </section>
        </div>

        <main
          className="StickyComment__container TempComment"
          style={{
            display: 'flex',
            position: 'absolute',
            top: top,
            left: left
          }}
        >
          <hr className="StickyComment__midbar" />

          <form className="StickyComment__form">
            <textarea
              ref={input => (this.nameInput = input)}
              type="text"
              value={comment}
              onChange={e => this.setState({ comment: e.target.value })}
            />
          </form>

          <button
            className="StickyComments__submit-btn"
            onClick={e => this.onSubmit(e, c)}
          >
            <SendIcon />
          </button>
          {/* <button onClick={e => this.handleDelete(e, id)}>delete</button> */}
        </main>
      </>
    );
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  handleDelete(e, id) {
    e.preventDefault();
    this.props.commentDelete(id);
  }

  onSubmit = (e, c) => {
    e.preventDefault();
    const newComment = {
      ...c,
      text: this.state.comment
    };
    this.props.onSubmit(e, newComment);
  };
}
