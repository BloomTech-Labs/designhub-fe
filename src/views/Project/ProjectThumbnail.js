import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './styles.scss';
import { useQuery } from '@apollo/react-hooks';

<<<<<<< HEAD
import { GET_ALL_PROJECTS_QUERY } from '../../graphql/index';

import defaultImg from '../../ASSETS/default_thumbnail.svg';

const ProjectThumbnail = ({ project, projectData }) => {
  //console.log('PROJECTS PROJECT THUMBNAIL', project);
  const publishedOn = new Date(projectData?.project?.created_at / 1);
=======

import { GET_ALL_PROJECTS_QUERY,
GET_USER_BY_ID_QUERY } from '../../graphql/index';

import defaultImg from '../../ASSETS/default_thumbnail.svg';

const ProjectThumbnail = ({ project }) => {
>>>>>>> 35d164ff6696f596f4eca577ece521fec327555c

  const { data, loading } = useQuery(GET_USER_BY_ID_QUERY, {
    variables: { id: project?.userId },
  });
  
  const [user, setUser] = useState({
    avatar: null,
    firstName: null,
    username: null,
  });
  const { data: allProjects } = useQuery(GET_ALL_PROJECTS_QUERY);
  
  useEffect(() => {
    if (!project || !project.userId) return;
    setUser(allProjects[0]);
  }, [project]);

  return !project ? null : (
    <div className="project-content">
      <Link to={`/project/${project.id}`}>
        <div className="project-info">
          <div className="project-flex">
            <img className="avatar" src={data?.user?.avatar} alt={data?.user?.firstName} />
            <div className="project-middle">
              {project.name.length > 35 ? (
                <h1>{project.name.slice(0, 35)}...</h1>
              ) : (
                <h1>{project.name}</h1>
              )}
              <h1 className="project-username">{data?.user?.username}</h1>
            </div>
            <h1 className="created">
              {moment(publishedOn).format('MM/DD/YYYY')}
            </h1>
          </div>
        </div>
        <img
          src={project.mainImg ? project.mainImg : defaultImg}
          className="project-thumbnail"
          alt="test"
          key={project.id}
        />
      </Link>
    </div>
  );
};
export default ProjectThumbnail;
