import React from 'react';
import '../SASS/ProjectInvite.scss';
import { connect } from 'react-redux'

import { deleteInvite } from '../store/actions'


const ProjectInvite = ({ avatar, firstName, lastName, invite, deleteInvite, email }) => {
  const handleInviteDelete = (invite) => {
    deleteInvite(invite);
  }

  return (
    <div className="project-invite">
      <div className="left">
        <div className="avatar">
          <img src={avatar ? avatar : null} alt={firstName ? firstName + ' ' + lastName : email} />
        </div>
        <div className="info">
          <p>{firstName ? firstName + ' ' + lastName : email}</p>
          <p className='status'>Pending...</p>
        </div>
      </div>
      <div className="actions">
        {/* Any necessary buttons will go here */}
        <div className="close-collab-icon-div" >
          <div className="close-collab-icon" onClick={() => handleInviteDelete(invite)}> X </div>
        </div>

      </div>
    </div>
  );
};

export default connect(null, { deleteInvite })(ProjectInvite);
