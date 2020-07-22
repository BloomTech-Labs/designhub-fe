import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './styles.scss';
import { useQuery } from '@apollo/react-hooks';

import { GET_USER_BY_ID_QUERY } from '../../graphql/index';

import defaultImg from '../../ASSETS/default_thumbnail.svg';

const ProjectThumbnail = ({ project, projectData }) => {
  // console.log("thumbnail project props data",project)
  const { data } = useQuery(GET_USER_BY_ID_QUERY, {
    variables: { id: projectData?.userId },
  });
  const publishedOn = new Date(project?.created_at / 1);

  // const publishedOn = new Date(projectData?.created_at / 1);

  return !projectData ? null : (
    <div className="project-content">
      <Link to={`/project/${projectData.id}`}>
        <div className="project-info">
          <div className="project-flex">
            <img
              className="avatar"
              src={data?.user?.avatar}
              alt={data?.user?.firstName}
            />
            <div className="project-middle">
              {projectData.name.length > 35 ? (
                <h1>{projectData.name.slice(0, 35)}...</h1>
              ) : (
                <h1>{projectData.name}</h1>
              )}
              <h1 className="project-username">{data?.user?.username}</h1>
            </div>
            <h1 className="created">{moment(publishedOn).format('ll')}</h1>
          </div>
        </div>
        <img
          src={projectData.mainImg ? projectData.mainImg : defaultImg}
          className="project-thumbnail"
          alt="test"
          key={projectData.id}
        />
      </Link>
    </div>
  );
};
export default ProjectThumbnail;
