import React from 'react';
import '../SASS/ProjectInvite.scss';
import { connect } from 'react-redux'
import anonymous from "../ASSETS/anonymous.jpg";

import { deleteInvite, updateInvite } from '../store/actions'


const ProjectInvite = ({ avatar, firstName, lastName, invite, deleteInvite, email, updateInvite }) => {
  const handleInviteDelete = (invite) => {
    deleteInvite(invite);
  }

  const handleInviteEdit = (e) => {
    if (e.target.value === "view") {
      updateInvite(invite.id, { write: false })
    } else {
      updateInvite(invite.id, { write: true })
    }
  }

  return (

    <div className="project-invite">
      <div className="left">
        <div className="avatar">
          <img src={avatar ? avatar : anonymous} alt={firstName ? firstName + ' ' + lastName : email} />
        </div>
        <div className="info">
          <p>{firstName ? firstName + ' ' + lastName : email}</p>
          <p className='status'>{invite.pending ? "Pending..." : "Accepted"}</p>
        </div>
      </div>
      <div className="actions">
        {/* Any necessary buttons will go here */}
        <div className="invite-edit-div">
          <select className="invite-edit-drop" onChange={handleInviteEdit} value={invite.write ? "edit" : "view"}>
            <option value="view">Can View</option>
            <option value="edit">Can Edit</option>
          </select>
        </div>
        <div className="close-collab-icon-div" onClick={() => handleInviteDelete(invite)}>
          <div className="close-collab-icon" > Remove </div>
        </div>

      </div>
    </div>
  );
};

export default connect(null, { deleteInvite, updateInvite })(ProjectInvite);
