import React from 'react';
import Layout from '../../common/Layout';

import './styles.scss';

import TopBar from '../../common/Nav/TopBar';
import ProjectDetails from './ProjectDetails';
// import ProjectPdf from './ProjectPdf';
import ProjectButtonLinks from './ProjectButtonLinks';
import ImageViewer from './ImageViewer/ImageViewer';

export default function Projects() {
  
  return (
    <Layout>
    <TopBar />
      <div className="projects-container">
        <div className="project-header">
          <div className="project-header-alignment">
            <ProjectDetails />
            <ProjectButtonLinks />
          </div>
        </div>
      </div>
      {/*Show:*/}
      {/*  <ProjectPdf />*/}
      {/*or show:*/}
      <div className="project-body">
        <ImageViewer />
      </div>
    </Layout>
  );
}
