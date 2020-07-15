import React from 'react';
import Layout from '../../common/Layout';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.scss';

import ProjectDetails from './ProjectDetails';
import ProjectPdf from './ProjectPdf';
import ProjectButtonLinks from './ProjectButtonLinks';
import ImageViewer from './ImageViewer/ImageViewer';

import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECT_BY_ID_QUERY } from '../../graphql';
import { GET_USER_BY_ID_QUERY } from '../../graphql';
import ProjectThumbnail from './ProjectThumbnail';
import ProjectFromBody from '../CreateProject/ProjectFormBody';

export default function Projects() {
  const { id } = useParams();
  const { data: projectData } = useQuery(GET_PROJECT_BY_ID_QUERY, {
    variables: { id: id },
  });

  const { data: userData } = useQuery(GET_USER_BY_ID_QUERY, {
    variables: { id: projectData?.project?.userId },
  });

  const { data: projectImg } = useQuery(GET_PROJECT_BY_ID_QUERY, {
    variables: { id: id },
  });

  console.log('projectComms', projectImg);
  console.log('ProjectDeets', userData);
  console.log('projectdata', projectData);

  return (
    <Layout>
      <div className="projects-container">
        <div className="project-header">
          <div className="project-header-alignment">
            <ProjectDetails projectData={projectData} userData={userData} />
            <ProjectButtonLinks />
          </div>
        </div>
      </div>
      {/* Show:*/}
      {/* {<ProjectPdf />} */}
      {/*or show: */}
      <div className="project-body">
        <ImageViewer
          projectData={projectData}
          userData={userData}
          projectImg={projectData?.project?.photos}
        />
        <ProjectThumbnail />
      </div>
    </Layout>
  );
}
