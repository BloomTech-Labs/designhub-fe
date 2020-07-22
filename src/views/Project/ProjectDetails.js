import React from 'react';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_USER_BY_ID_QUERY, GET_PROJECT_BY_ID_QUERY } from '../../graphql';
import './styles.scss';

export default function ProjectDetails() {
  const { id } = useParams();
  const { data: projectData } = useQuery(GET_PROJECT_BY_ID_QUERY, {
    variables: { id: id },
  });
  const { data: userData } = useQuery(GET_USER_BY_ID_QUERY, {
    variables: { id: projectData?.project?.userId },
  });
  const publishedOn = new Date(projectData?.project?.created_at / 1);

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
