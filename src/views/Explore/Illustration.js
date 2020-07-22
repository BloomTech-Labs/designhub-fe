import React from 'react';

import empty from '../../ASSETS/Icons/empty_project.svg';
import ProjectThumbnail from '../Project/ProjectThumbnail';

export default function Illustration({ allProjects, getIllustrations, user, allUsers, illustrations, ...rest }) {
  // let getIllustrations = allProjects?.projects.filter((project) => {
  //   if (project?.category == 'Illustration') {
  //     return project;
  //   }
  // });
  // console.log(getIllustrations);

  return (
    <>
      <div className="empty-state">
        <img src={empty} alt="empty" className="empty-icon" />
        <h1 className="no-projects">There are no projects in this category.</h1>
      </div>

      <div className="explore-projects-array">
        {getIllustrations.map((project) => {
          const user = allUsers?.users.find((user) => user.id === project.userId);
          return (
            <ProjectThumbnail projectData={project} user={user} key={project.id} />
          );
        })}{' '}
      </div>
    </>
  );
}

// export default function Illustration() {
//   return (
//     <>
//       <div className="empty-state">
//         <img src={empty} alt="empty" className="empty-icon" />
//         <h1 className="no-projects">There are no projects in this category.</h1>
//       </div>

//       <div className="explore-projects-array">
//         <ProjectThumbnail />;
//       </div>
//     </>
//   );
// }
