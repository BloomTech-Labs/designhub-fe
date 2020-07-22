import React from 'react';
//import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function ProjectDetails() {
  return (
    <>
      <div className="project-details">
        <h2>project.name</h2>
        <h3>project.description</h3>
        <div className="subtitle">
          <span>
            Created by{' '}
            <span className="project-header-username">
              <Link>project.username.link</Link>
            </span>
          </span>
          <span>'MMM DD, YYYY'</span>
          <span className="collab-count">
            'Collaborators'
            <span className="collab-members">
              <p>collab.user</p>
            </span>
          </span>
          {/*project category*/}
          <span>
            <p>categories</p>
          </span>
        </div>
      </div>
    </>
  );
}
