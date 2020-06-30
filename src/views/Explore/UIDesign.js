import React from 'react';

import empty from '../../ASSETS/Icons/empty_project.svg';
import ProjectThumbnail from '../Project/ProjectThumbnail';

export default function UIDesign() {
  return (
    <>
      <div className="empty-state">
        <img src={empty} alt="empty" className="empty-icon" />
        <h1 className="no-projects">There are no projects in this category.</h1>
      </div>

      <div className="explore-projects-array">
        <ProjectThumbnail />;
      </div>
    </>
  );
}
