<<<<<<< HEAD
import React, { PropTypes, useState } from 'react';
=======
import React from 'react';
>>>>>>> cba8fd1f468182ef11996ae0c9d4418870d57b7b
import './styles.scss';
import anonymous from '../../ASSETS/anonymous.jpg';

const Editing = ({ project, user }) => {
  const [state, setState] = useState({
    inviteModal: false,
  });

  return (
    <>
      <label htmlFor="inviteLink" className="label">
        Collaborators
      </label>

      <div className="collab-pics">
        <div className="avatar" key={user.email}>
          <img
            src={user.avatar ? user.avatar : anonymous}
            alt={
              user.firstName //questions....
                ? user.firstName + ' ' + user.lastName
                : user.email
            }
            alt="user.firstName"
          />
          <span className="name">
            {user.firstName //more questions of the same
              ? user.firstName + ' ' + user.lastName
              : user.email}
            user.name
          </span>
        </div>

        {user.id !== project.userId ? null : (
          <div
            id="inviteLink"
            className="invite"
            onClick={() => setState({ ...state, inviteModal: true })}
          >
            <div>+</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Editing;
