import React from 'react';

import avatar1 from '../ASSETS/avatar.jpg';
import avatar2 from '../ASSETS/avatar_2.jpg';
import avatar3 from '../ASSETS/avatar_3.jpg';

import '../SASS/Project.scss';

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
            <span>
              Created by{' '}
              <span className="project-header-username">
                <a href="#">eriklambert</a>
              </span>
            </span>
            <span>Created on June 11, 2020</span>
          </p>
        </div>
        <div className="project-header-right">
          <div className="project-header-team">
            <img src={avatar1} alt="user avatar" />
            <img src={avatar2} alt="user avatar" />
            <img src={avatar3} alt="user avatar" />
          </div>
          <div className="project-header-links">
            <div className="project-header-button">Figma</div>
            <div className="project-header-button">InVision</div>
            <div className="project-header-button">Download</div>
            <div className="project-header-button">Star</div>
            <div className="project-header-button">Edit</div>
          </div>
        </div>
      </div>
      <div className="project-body">
        <div className="project-main-image">
          <img src={projects[0].thumbnail} alt="main project image" />
        </div>
        <div className="project-thumbnails">
          {projects.map(project => (
            <img src={project.thumbnail} alt="project-thumbnail" />
          ))}
        </div>
        <div className="project-comments">
          <div className="comments-header">Comments</div>
          <div className="comments-body">Comments body</div>
          <div className="comments-form">
            <form>
              <div className="form-wrapper">
                <input type="text" placeholder="Leave a comment..." />
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
