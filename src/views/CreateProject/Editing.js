import React from 'react';
import './styles.scss';
const Editing = () => {
  return (
    <>
      <label htmlFor="inviteLink" className="label">
        Collaborators
      </label>

      <div className="collab-pics">
        <div
          className="avatar"
          /*key={user.email}*/
        >
          <img
            /*src={user.avatar ? user.avatar : anonymous}*/
            /*                alt={
                  user.firstName
                    ? user.firstName + ' ' + user.lastName
                    : user.email
                }*/
            alt="user.firstName"
          />
          <span className="name">
            {/*                {user.firstName
                  ? user.firstName + ' ' + user.lastName
                  : user.email} */}
            user.name
          </span>
        </div>
        {/*          );
        })}*/}
        {/*{user.id !== project.userId ? null : (*/}
        <div
          id="inviteLink"
          className="invite"
          /*            onClick={() => setState({ ...state, inviteModal: true })}*/
        >
          <div>+</div>
        </div>
        {/*)}*/}
      </div>
    </>
  );
};

export default Editing;