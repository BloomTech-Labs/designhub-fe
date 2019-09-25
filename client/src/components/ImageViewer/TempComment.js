import React from 'react';

export class TempComment extends React.Component {
  state = {
    comment: ''
  };

  render() {
    const { comment } = this.state;
    const { c } = this.props;
    const { id, top, left } = c;
    return (
      <div
        className="sticker"
        style={{
          position: 'absolute',
          top: top,
          left: left
        }}
      >
        <form onSubmit={e => this.handleSubmit(e, c)}>
          <input
            ref={input => (this.nameInput = input)}
            type="text"
            value={comment}
            onChange={e => this.setState({ comment: e.target.value })}
          />
          <button type="submit">submit</button>
          <button onClick={e => this.handleDelete(e, id)}>delete</button>
        </form>
      </div>
    );
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  handleDelete(e, id) {
    e.preventDefault();
    this.props.commentDelete(id);
  }

  handleSubmit = (e, c) => {
    e.preventDefault();
    const newComment = {
      ...c,
      text: this.state.comment
    };
    this.props.onSubmit(e, newComment);
  };
}
