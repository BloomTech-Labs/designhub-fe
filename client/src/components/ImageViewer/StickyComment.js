import React from 'react';

export const StickyComment = ({ id, commentDelete, top, left, text }) => {
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

      <div className="StickyComment__text">{text}</div>

      <button
        className="StickyComment__del-button"
        onClick={() => commentDelete(id)}
      >
        X
      </button>
    </div>
  );
};
