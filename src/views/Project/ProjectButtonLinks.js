import React from 'react';
import { useParams } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import './styles.scss';

//Images and Icons:
import figmaIcon from '../../ASSETS/figma-icon.png';
import invisionIcon from '../../ASSETS/invision-icon.png';
import DownloadIcon from '../../ASSETS/Icons/DownloadIcon';
import StarIcon from '../../ASSETS/Icons/StarIcon';
import caseStudyIcon from '../../ASSETS/case-study.png';

export default function ProjectButtonLinks(props) {
  const { id } = useParams();
  return (
    <div className="project-header-links">
      <div className="project-header-button">
        {/*{props.projectResearch[0]? (
          <img src-{caseStudyIcon} alt="case study" classname="pdf-button"
            onClick={() => }) 
            />
              ) : (
          */}
        <img
          src={caseStudyIcon}
          alt="case study"
          className="pdf-button-disabled"
        />
      </div>
      <div className="project-header-button">
        {/*
                    {thisProject.figma ? (
                      <a href={thisProject.figma}>
                        <img
                          src={figmaIcon}
                          className={
                            thisProject.figma === null ||
                            thisProject.figma === ''
                              ? 'link-disabled'
                              : 'link-enabled'
                          }
                          alt="figma"
                        />
                      </a>
                    ) : (
                */}
        <img
          src={figmaIcon}
          className="link-disabled"
          //  thisProject.figma === null || thisProject.figma === ''
          // ? 'link-disabled'
          // : 'link-enabled'
          alt="figma"
        />
        {/*)}*/}
      </div>
      <div className="project-header-button">
        {/*
        // {thisProject.invision ? (
        //   <a href={thisProject.invision}>
        //     <img
        //       src={invisionIcon}
        //       className={
        //         thisProject.invision === '' || thisProject.invision === null
        //           ? 'link-disabled'
        //           : 'link-enabled'
        //       }
        //       alt="invision"
        //     />
        //   </a>
        // ) : ( 
        */}
        <img
          src={invisionIcon}
          className="link-disabled"
          /*{
              thisProject.invision === '' || thisProject.invision === null
                ? 'link-disabled'
                : 'link-enabled'
            }*/
          alt="invision"
        />
        {/*)}*/}
        <div className="download project-header-button">
          <DownloadIcon />
        </div>
        {/*        <div
          onClick={props.isStarred ? unstarProject : starProject}
          className="star project-header-button"
        >*/}
        <StarIcon isStarred={props.isStarred} />
        {/*</div>*/}
        {/*
        {(props.activeUser.id === props.project.userId ||
          state.editAccess) && (
        */}
        <div
          className="edit project-header-button"
          /* onClick={() => {
              props.history.push(`/project/${projectId}/edit`);
            }}*/
        >
          Edit
        </div>
        {/*)}*/}
      </div>
    </div>
  );
}
