import React from 'react';

import './SASS/Project.scss';

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <div className="project-header-description">
          <h2>DesignHub - Webdesign - Project</h2>
          <h3>
            DesignHub Product design files + Case study + assets + prototypes.
          </h3>
          <p>
            <span>Created by eriklambert</span>
            <span>Created on June 11, 2020</span>
          </p>
        </div>
        <div className="project-header-right">
          <div className="project-header-team">
            Team members avatars go here
          </div>
          <div className="project-header-links">
            download, star and other links here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
