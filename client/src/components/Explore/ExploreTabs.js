import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Loading from '../Loading';
import ProjectThumbnail from '../ProjectThumbnail';

import '../../SASS/Explore.scss';

const ExploreTabs = ({ recent, popular, following, users }) => {

  

  if (recent && popular && following) {

    return (
      <div className="explore-tabs-container">
        <div>
          <Tabs>
            <TabList className="explore-nav-links">
              <Tab className="links" selectedClassName="active-link">
                Popular
              </Tab>
              <Tab className="links" selectedClassName="active-link">
                Recents
              </Tab>
              <Tab className="links" selectedClassName="active-link">
                Following
              </Tab>
            </TabList>
            {/* // ======== Popular Tab ======== // */}
            <TabPanel className="tabs-container">

              <div className="explore-projects-array">
                {popular.map(project => {
                  const user = users.find(user => user.id === project.userId);
                  return <ProjectThumbnail project={project} user={user} key={project.id} />
                }
                )}
              </div>
            </TabPanel>

            {/* // ======== Recents Tab ======== // */}
            <TabPanel className="tabs-container">

              <div className="explore-projects-array">
                {recent.map(project => {
                  const user = users.find(user => user.id === project.userId);
                  return <ProjectThumbnail project={project} user={user} key={project.id} />
                })}
              </div>
            </TabPanel>

            {/* // ======== Following Tab ======== // */}
            <TabPanel className="tabs-container">

              <div className="explore-projects-array">
                {following.map(project => {
                  const user = users.find(user => user.id === project.userId);
                  return <ProjectThumbnail project={project} user={user} key={project.id} />
                }
                )}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );

  }//end if
  else {
    return <Loading />;
  }

};

export default ExploreTabs;
