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
            <div className="header-popular-projects">
              {popular.map(project => (
                <Link to={`/project/${project.id}`}>
                  <img
                    src={project.mainImg ? project.mainImg : defaultImg}
                    alt={project.name}
                    className="large-project-thumbnail"
                    key={project.id}
                  />
                </Link>
              ))}
            </div>
            <div className="popular-projects-array">
              {popular.map(project => (
                <Link to={`/project/${project.id}`}>
                  <img
                    src={project.mainImg ? project.mainImg : defaultImg}
                    alt={project.name}
                    className="small-project-thumbnail"
                    key={project.id}
                  />
                </Link>
              ))}
            </div>
          </TabPanel>

          {/* // ======== Recents Tab ======== // */}
          <TabPanel className="tabs-container">
            <div className="header-popular-projects">
              {recent.map(project => (
                <Link to={`/project/${project.id}`}>
                  <img
                    src={project.mainImg ? project.mainImg : defaultImg}
                    alt={project.name}
                    className="large-project-thumbnail"
                    key={project.id}
                  />
                </Link>
              ))}
            </div>
            <div className="popular-projects-array">
              {recent.map(project => (
                <Link to={`/project/${project.id}`}>
                  <img
                    src={project.mainImg ? project.mainImg : defaultImg}
                    alt={project.name}
                    className="small-project-thumbnail"
                    key={project.id}
                  />
                </Link>
              ))}
            </div>
          </TabPanel>

          {/* // ======== Following Tab ======== // */}
          <TabPanel className="tabs-container">
            <div className="header-popular-projects">
              {following.map(project => (
                <Link to={`/project/${project.id}`}>
                  <img
                    src={project.mainImg ? project.mainImg : defaultImg}
                    alt={project.name}
                    className="large-project-thumbnail"
                    key={project.id}
                  />
                </Link>
              ))}
            </div>
            <div className="popular-projects-array">
              {following.map(project => (
                <Link to={`/project/${project.id}`}>
                  <img
                    src={project.mainImg ? project.mainImg : defaultImg}
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
