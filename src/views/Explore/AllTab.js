import React from 'react';


import ProjectThumbnail from '../Project/ProjectThumbnail';

export default function AllTab({projects, users, ...rest}) {
  return (
    <>
      <div className="explore-projects-array">
      {projects?.projects.map(projectData => {
          const user = users?.users?.find(user => users.id === projects.userId);
          return (
            <ProjectThumbnail projectData={projectData} user={user} key={projectData.id} />
          );
        })}
      </div>
    </>
  );
}
