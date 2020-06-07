import React from 'react';
import Layout from '../../common/Layout';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.scss';

import ProjectDetails from './ProjectDetails';
import ProjectPdf from './ProjectPdf';
import ProjectButtonLinks from './ProjectButtonLinks';
import ImageViewer from './ImageViewer/ImageViewer';

//Images and Icons:
import avatar1 from '../../ASSETS/avatar.jpg';
import avatar2 from '../../ASSETS/avatar_2.jpg';
import avatar3 from '../../ASSETS/avatar_3.jpg';
// import figmaIcon from '../../ASSETS/figma-icon.png';
// import invisionIcon from '../../ASSETS/invision-icon.png';
// import DownloadIcon from '../../ASSETS/Icons/DownloadIcon';
// import StarIcon from '../../ASSETS/Icons/StarIcon';
// import caseStudyIcon from '../../ASSETS/case-study.png';

export default function Projects() {
  const { id } = useParams();
  return (
    <Layout>
      <div className="project-container">
        <div className="project-header">
          <div className="project-header-alignment">
           <ProjectDetails />
           <ProjectButtonLinks />
          </div>
        </div>
{/*Show:*/}
    <ProjectPdf />
{/*or show:*/}
<div className="project-body">
    *<ImageViewer />
      </div>
      </div>
    </Layout>
  );
}
