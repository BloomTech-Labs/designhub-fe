import React from 'react';
import Layout from '../../common/Layout';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.scss';

import ProjectButtonLinks from './ProjectButtonLinks';

//Images and Icons:
import avatar1 from '../../ASSETS/avatar.jpg';
import avatar2 from '../../ASSETS/avatar_2.jpg';
import avatar3 from '../../ASSETS/avatar_3.jpg';

export default function ProjectDetails(props) {
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