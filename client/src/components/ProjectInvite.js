import React from 'react';
import '../SASS/ProjectInvite.scss';
import { connect } from 'react-redux'

import { deleteInvite } from '../store/actions'


const ProjectInvite = ({ avatar, firstName, lastName, invite, deleteInvite }) => {
  const handleInviteDelete = (invite) => {
    deleteInvite(invite);
  }

  return (
    <div className="project-invite">
      <div className="left">
        <div className="avatar">
          <img src={avatar} alt={firstName + ' ' + lastName} />
        </div>
        <div className="info">
          <p>{firstName + ' ' + lastName}</p>
          <p className='status'>Pending...</p>
        </div>
      </div>
      <div className="actions">
        {/* Any necessary buttons will go here */}
        <div className="close-collab-icon-div" >
          <div className="close-collab-icon" onClick={() => handleInviteDelete(invite)}> x </div>
        </div>

      </div>
    </div>
  );
};

export default connect(null, { deleteInvite })(ProjectInvite);
