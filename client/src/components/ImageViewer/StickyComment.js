import React from 'react';
import moment from 'moment';

export const StickyComment = ({
  hidden,
  created_at,
  top,
  left,
  text,
  userAvatar,
  username
}) => {
  return (
    <>
      <div
        className="StickyComment__hover-space"
        style={
          hidden
            ? { display: 'none' }
            : {
                top: top,
                left: left
              }
        }
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
              <p>{moment(created_at).fromNow()}</p>
            </header>
            <p>{text}</p>
          </div>
        </section>
      </main>
    </>
  );
};
