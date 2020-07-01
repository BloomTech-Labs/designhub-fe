import React from 'react';

import { TabPanel } from 'react-tabs';
import ProjectThumbnail from '../Project/ProjectThumbnail';

export default function AllTab({projects, users, ...rest}) {
  return (
    <>
      <div className="explore-projects-array">
      {projects?.projects.map(project => {
          const user = users?.users?.find(user => users.id === projects.userId);
          return (
            <ProjectThumbnail project={project} user={user} key={project.id} />
          );
        })}
      </div>
    </>
  );
}
