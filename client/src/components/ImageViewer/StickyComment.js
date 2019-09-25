import React from 'react';

export const StickyComment = ({
  id,
  commentDelete,
  top,
  left,
  text,
  userAvatar,
  username
}) => {
  return (
    <div
      className="StickyComment"
      style={{
        top: top,
        left: left
      }}
    >
      <section className="StickyComment__dot">
        <div className="StickyComment__dot-center"> </div>
      </section>

      <hr className="StickyComment__midbar" />

      <section className="StickyComment__body">
        <img
          src={userAvatar}
          alt="avatar"
          className="StickyComment__body__avatar"
        />
        <div className="StickyComment__body__text">
          <header>
            <em>{username}</em>
            <p>3h</p>
          </header>
          <p>{text}</p>
        </div>
        <button
          className="StickyComment__del-button"
          onClick={() => commentDelete(id)}
        >
          <span>x</span>
        </button>
      </section>
    </div>
  );
};
