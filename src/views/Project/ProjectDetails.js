<<<<<<< HEAD
import React, { useEffect } from 'react';
import Layout from '../../common/Layout';
import { useParams } from 'react-router-dom';
=======
import React from 'react';
//import { useParams } from 'react-router-dom';
>>>>>>> cba8fd1f468182ef11996ae0c9d4418870d57b7b
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_BY_ID_QUERY } from '../../graphql';
import './styles.scss';

<<<<<<< HEAD
import moment from 'moment';
import ProjectButtonLinks from './ProjectButtonLinks';

//Images and Icons:
// import avatar1 from '../../ASSETS/avatar.jpg';
// import avatar2 from '../../ASSETS/avatar_2.jpg';
// import avatar3 from '../../ASSETS/avatar_3.jpg';

export default function ProjectDetails({ projectData, userData }) {
  const publishedOn = new Date(projectData?.project?.created_at / 1);

=======
export default function ProjectDetails() {
>>>>>>> cba8fd1f468182ef11996ae0c9d4418870d57b7b
  return (
    <>
      <div className="project-details">
        <h2>{projectData?.project?.name}</h2>
        <h3>{projectData?.project?.description}</h3>
        <div className="subtitle">
          <span>
            Created by {userData?.user?.username}
            <span className="project-header-username">
              {
                <Link to={`/profile/${userData?.project?.user}`}>
                  {projectData?.project?.username}
                </Link>
              }
            </span>
          </span>
          <span>Created on {moment(publishedOn).format('MM/DD/YYYY')}</span>

          <span className="collab-count">
            Collaborators{' '}
            <span className="collab-members">
              <p>{userData?.project?.username}</p>
            </span>
          </span>
          {/* project category */}
          <span>
            <p>categories</p>
          </span>
        </div>
      </div>
    </>
  );
}
