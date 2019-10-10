import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../SASS/Explore.scss';

const ExploreTabs = ({ popularProjects }) => {
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

          <TabPanel className="tabs-container">
            <div className="header-popular-projects">
              {popularProjects.slice(0, 2).map(project => (
                <Link to={`/project/${project.id}`}>
                  <img
                    src={project.mainImg}
                    alt={project.name}
                    className="large-project-thumbnail"
                    key={project.id}
                  />
                </Link>
              ))}
            </div>
            <div className="popular-projects-array">
              {popularProjects.map(project => (
                <Link to={`/project/${project.id}`}>
                  <img
                    src={project.mainImg}
                    alt={project.name}
                    className="small-project-thumbnail"
                    key={project.id}
                  />
                </Link>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ExploreTabs;
