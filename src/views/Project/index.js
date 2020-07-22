import React from 'react';
import Layout from '../../common/Layout';

import './styles.scss';

import ProjectDetails from './ProjectDetails';
import { useParams } from 'react-router-dom';
import ProjectButtonLinks from './ProjectButtonLinks';
import ImageViewer from './ImageViewer/ImageViewer';

import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECT_BY_ID_QUERY } from '../../graphql';
import { GET_USER_BY_ID_QUERY } from '../../graphql';

export default function Projects() {
  const { id } = useParams();
  const { data: projectData } = useQuery(GET_PROJECT_BY_ID_QUERY, {
    variables: { id: id },
  });

  const { data: userData } = useQuery(GET_USER_BY_ID_QUERY, {
    variables: { id: projectData?.project?.userId },
  });

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

      <div className="project-body">
        <ImageViewer
          projectData={projectData}
          projectImg={projectData?.project?.photos}
        />
      </div>
    </Layout>
  );
}
