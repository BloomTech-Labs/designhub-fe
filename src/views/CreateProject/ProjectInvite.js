import React from 'react';
import anonymous from '../../ASSETS/anonymous.jpg';
const ProjectInvite = () => {
  return (
    <div className="project-invite">
      <div className="left">
        <div className="avatar">
          <img
            src={avatar ? avatar : anonymous}
            alt={firstName ? firstName + ' ' + lastName : email}
          />
        </div>
        <div className="info">
          <p>{firstName ? firstName + ' ' + lastName : email}</p>
          <p className="status">{invite.pending ? 'Pending...' : 'Accepted'}</p>
        </div>
      </div>
      <div className="actions">
        {/* Any necessary buttons will go here */}
        <div className="invite-edit-div">
          <select
            className="selectpicker show-tick"
            onChange={handleInviteEdit}
            value={invite.write ? 'edit' : 'view'}
          >
            <option className="special" value="view">
              Can View
            </option>
            <option className="special" value="edit">
              Can Edit
            </option>
          </select>
        </div>
        <div
          className="close-collab-icon-div"
          onClick={() => handleInviteDelete(invite)}
        >
          <div className="close-collab-icon"> Remove </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInvite;