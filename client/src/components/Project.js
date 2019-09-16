import React from 'react';

import './SASS/Project.scss';

const Project = () => {
  const projects = [
    {
      project_id: 1,
      thumbnail:
        'https://cdn.dribbble.com/users/182336/screenshots/7150621/media/b0a6aa5b2a19029479da7d91972b2774.png'
    },
    {
      project_id: 2,
      thumbnail:
        'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
    },
    {
      project_id: 3,
      thumbnail:
        'https://cdn.dribbble.com/users/3281732/screenshots/7150760/media/a11dae58a8eee44d242417ae6a6bed3c.jpg'
    },
    {
      project_id: 4,
      thumbnail:
        'https://cdn.dribbble.com/users/674925/screenshots/7147175/media/ca03b14f14639eddf76bd01174c9f2c5.png'
    },
    {
      project_id: 5,
      thumbnail:
        'https://cdn.dribbble.com/users/1430543/screenshots/7151173/media/c6109e2cedff65261c8a5f33ce618bba.jpg'
    },
    {
      project_id: 6,
      thumbnail:
        'https://cdn.dribbble.com/users/1312159/screenshots/7148680/image.png'
    },
    {
      project_id: 7,
      thumbnail:
        'https://cdn.dribbble.com/users/2151039/screenshots/7148065/media/2cf88366ac2a35660345ca8226a97085.png'
    },
    {
      project_id: 8,
      thumbnail:
        'https://cdn.dribbble.com/users/1160700/screenshots/7150660/media/610f9cc1a848c9ec6ba0121a4c569a9f.png'
    }
  ];

  return (
    <div className="project-container">
      <div className="project-header">
        <div className="project-details">
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
      <div className="project-body">
        <div className="project-main-image">Main image</div>
        <div className="project-thumbnails">
          {projects.map(project => (
            <img src={project.thumbnail} alt="project-thumbnail" />
          ))}
        </div>
        <div className="project-comments">Comments</div>
      </div>
    </div>
  );
};

export default Project;
