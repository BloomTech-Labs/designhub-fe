import React from 'react';
import Layout from '../../common/Layout';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.scss';

import ProjectButtonLinks from './ProjectButtonLinks';

//Images and Icons:
import avatar1 from '../../ASSETS/avatar.jpg';
import avatar2 from '../../ASSETS/avatar_2.jpg';
import avatar3 from '../../ASSETS/avatar_3.jpg';

export default function ProjectDetails(props) {
  return (
    <>
      <div className="project-header">
        <div className="project-header-alignment">
          <div className="project-details">
            <h2>project.name</h2>
            <h3>project id {props.id}</h3>
            <div className="subtitle">
              <span>
                Created by placeholderUsername
                <span className="project-header-username">
                  <Link>project.username</Link>
                </span>
              </span>
              <span>Created on placeholderDate</span>
              {
                // <span>
                //  Logic for privateProject
                // </span>
              }
              <span className="collab-count">
                1
                {
                  //props.acceptedInvites.length
                }
                <span className="collab-members">
                  {
                    //find(user.id === invite.userId)
                  }
                  <p>joe</p>
                  <p>bob</p>
                  <p>jane</p>
                </span>
              </span>
              {/*projectCategory*/}
              <span>
                <p>ux</p>
                <p>fan art</p>
              </span>
            </div>
          </div>
          <ProjectButtonLinks />
          <div className="project-header-right">
            <div className="project-header-team">
              <img src={avatar1} alt="user avatar" />
              <img src={avatar2} alt="user avatar" />
              <img src={avatar3} alt="user avatar" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}