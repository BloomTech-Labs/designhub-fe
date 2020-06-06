import React from 'react';
import Layout from '../../common/Layout';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.scss';

//Images and Icons:
import avatar1 from '../../ASSETS/avatar.jpg';
import avatar2 from '../../ASSETS/avatar_2.jpg';
import avatar3 from '../../ASSETS/avatar_3.jpg';
import figmaIcon from '../../ASSETS/figma-icon.png';
import invisionIcon from '../../ASSETS/invision-icon.png';
import DownloadIcon from '../../ASSETS/Icons/DownloadIcon';
import StarIcon from '../../ASSETS/Icons/StarIcon';
import caseStudyIcon from '../../ASSETS/case-study.png';


export default function ProjectButtonLinks(){
  const { id } =useParams()
      <div className="project-header-link">
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
                        className="link-enabled"
                        //  thisProject.figma === null || thisProject.figma === ''
                           // ? 'link-disabled'
                           // : 'link-enabled'
                        alt="figma"
                      />
                    )}
              </div>
<div className="project-header-button">
                    {thisProject.invision ? (
                      <a href={thisProject.invision}>
                        <img
                          src={invisionIcon}
                          className={
                            thisProject.invision === '' ||
                            thisProject.invision === null
                              ? 'link-disabled'
                              : 'link-enabled'
                          }
                          alt="invision"
                        />
                      </a>
                    ) : (
                      <img
                        src={invisionIcon}
                        className={
                          thisProject.invision === '' ||
                          thisProject.invision === null
                            ? 'link-disabled'
                            : 'link-enabled'
                        }
                        alt="invision"
                      />
                    )}
                  </div>

              
		  </div>
    }