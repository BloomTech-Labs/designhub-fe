import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import defaultImg from '../../ASSETS/default_thumbnail.svg';

import '../../SASS/Explore.scss';

const ExploreTabs = ({ recent, popular, following }) => {
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
              {popular.map(project => (
                <div className="project-content" key={project.id}>
                  <Link to={`/project/${project.id}`}>
                    <>
                      <div className="project-info">
                        <h1>{project.name}</h1>
                      </div>
                      <img
                        src={project.mainImg ? project.mainImg : defaultImg}
                        className="project-thumbnail"
                        alt="test"
                        key={project.id}
                      />
                    </>
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* // ======== Recents Tab ======== // */}
          <TabPanel className="tabs-container">
            <div className="explore-projects-array">
              {recent.map(project => (
                <div className="project-content" key={project.id}>
                  <Link to={`/project/${project.id}`}>
                    <>
                      <div className="project-info">
                        <h1>{project.name}</h1>
                      </div>
                      <img
                        src={project.mainImg ? project.mainImg : defaultImg}
                        className="project-thumbnail"
                        alt="test"
                        key={project.id}
                      />
                    </>
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* // ======== Following Tab ======== // */}
          <TabPanel className="tabs-container">
            <div className="explore-projects-array">
              {following.map(project => (
                <div className="project-content" key={project.id}>
                  <Link to={`/project/${project.id}`}>
                    <>
                      <div className="project-info">
                        <h1>{project.name}</h1>
                      </div>
                      <img
                        src={project.mainImg ? project.mainImg : defaultImg}
                        className="project-thumbnail"
                        alt="test"
                        key={project.id}
                      />
                    </>
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ExploreTabs;
