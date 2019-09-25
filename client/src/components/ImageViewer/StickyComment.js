import React from 'react';

export const StickyComment = ({ id, commentDelete, top, left, text }) => {
  return (
    <div
      className="sticker"
      style={{
        top: top,
        left: left
      }}
    >
      <div className="sticker-text">{text}</div>

      <button className="del-button" onClick={() => commentDelete(id)}>
        delete
      </button>
    </div>
  );
};
