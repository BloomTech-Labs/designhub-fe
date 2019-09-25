import React from 'react';

export const StickyComment = ({ top, left, text, userAvatar, username }) => {
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
        className="StickyComment__container"
        style={{
          top: top,
          left: left
        }}
      >
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
        </section>
      </main>
    </>
  );
};
