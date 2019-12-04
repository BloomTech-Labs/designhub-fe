import React from 'react';
import '../SASS/ProjectInvite.scss';

const ProjectInvite = ({ avatar, firstName, lastName }) => {
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
      <div className="actions">{/* Any necessary buttons will go here */}</div>
    </div>
  );
};

export default ProjectInvite;
