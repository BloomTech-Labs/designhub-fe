import React from 'react';
//import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import './styles.scss';

//Images and Icons:
import figmaIcon from '../../ASSETS/figma-icon.png';
import invisionIcon from '../../ASSETS/invision-icon.png';
import DownloadIcon from '../../ASSETS/Icons/DownloadIcon';
import StarIcon from '../../ASSETS/Icons/StarIcon';
import caseStudyIcon from '../../ASSETS/case-study.png';
import avatar1 from '../../ASSETS/avatar.jpg';
import avatar2 from '../../ASSETS/avatar_2.jpg';
import avatar3 from '../../ASSETS/avatar_3.jpg';

export default function ProjectButtonLinks(props) {
  // const { id } = useParams();
  return (
    <div className="project-header-right">
      <div className="project-header-team">
        <img src={avatar1} alt="user avatar" />
        <img src={avatar2} alt="user avatar" />
        <img src={avatar3} alt="user avatar" />
      </div>
      <div className="project-header-links">
        <div className="project-header-button">
          {/* <img src={caseStudyIcon} alt="case study" className="pdf-button" /> */}

          <img
            src={caseStudyIcon}
            alt="case study"
            className="pdf-button-disabled"
          />
        </div>
        <div className="project-header-button">
          {/*<a>*/}
          <img src={figmaIcon} className="link-enabled" alt="figma" />
          {/*</a>*/}

          <img src={figmaIcon} className="link-enabled" alt="figma" />
          {/* </a> */}

          {/* <img src={figmaIcon} className="link-enabled" alt="figma" /> */}
        </div>
        <div className="project-header-button">
          {/*<a>*/}
          <img src={invisionIcon} className="link-disabled" alt="invision" />
          {/*</a>*/}

          {/* <img src={invisionIcon} className="link-enabled" alt="invision" /> */}
        </div>
        <div className="download project-header-button">
          <DownloadIcon />
        </div>
        <div className="star project-header-button">
          <StarIcon />
        </div>

        <div className="edit project-header-button">Edit</div>
      </div>
    </div>
  );
}
