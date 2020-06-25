import React from 'react';

import { TabPanel } from 'react-tabs';
import empty from '../../ASSETS/Icons/empty_project.svg';
import ProjectThumbnail from '../Project/ProjectThumbnail';

export default function AllTab(props) {
    // console.log('GET ALL PROJECTS', props.projects);
    // console.log('GET ALL USERS', props.users)
  return (
    <TabPanel className="tabs-container">
      <div className="empty-state">
        <img src={empty} alt="empty" className="empty-icon" />
        <h1 className="no-projects">There are no projects in this category.</h1>
      </div>

      <div className="explore-projects-array">
      {props.projects?.projects.map((project) => {
          const user = props.users?.users.find((user) => user.id === project.userId);
          return (
            <ProjectThumbnail project={project} user={user} key={project.id} />
          );
        })}
      </div>
    </TabPanel>
  );
}
