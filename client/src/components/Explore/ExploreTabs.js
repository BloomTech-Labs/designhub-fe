import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import moment from 'moment';

import defaultImg from '../../ASSETS/default_thumbnail.svg';
import empty from '../Icons/empty_project.svg';
import Loading from '../Loading';

import '../../SASS/Explore.scss';

const ExploreTabs = ({ recent, popular, following }) => {

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

              {/***************IF THERE ARE NO POPULAR PROJECTS**************/}
              <div className="tab-content">
                {popular.length === 0 && (
                  <div className="empty-state">
                    <img src={empty} alt="empty" className="empty-icon" />
                    <h1 className="no-projects">
                      There are no popular projects.
                    </h1>
                  </div>
                )}

              </div>

              <div className="explore-projects-array">
                {popular.map(project => (
                  <div className="project-content" key={project.id}>
                    <Link to={`/project/${project.id}`}>
                      <>
                        <div className="project-info">
                          {project.name.length > 35 ? (
                            <h1>{project.name.slice(0, 35)}...</h1>
                          ) : (
                            <h1>{project.name}</h1>
                          )}
                          <h1 className="created">
                            {moment(project.created_at).format('MMM DD, YYYY')}
                          </h1>
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
              
              {/***************IF THERE ARE NO RECENT PROJECTS**************/}
              <div className="tab-content">
                {recent.length === 0 && (
                  <div className="empty-state">
                    <img src={empty} alt="empty" className="empty-icon" />
                    <h1 className="no-projects">
                      There are no recent projects.
                    </h1>
                  </div>
                )}

              </div>

              <div className="explore-projects-array">
                {recent.map(project => (
                  <div className="project-content" key={project.id}>
                    <Link to={`/project/${project.id}`}>
                      <>
                        <div className="project-info">
                          {project.name.length > 35 ? (
                            <h1>{project.name.slice(0, 35)}...</h1>
                          ) : (
                            <h1>{project.name}</h1>
                          )}
                          <h1 className="created">
                            {moment(project.created_at).format('MMM DD, YYYY')}
                          </h1>
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

               {/***************IF THERE ARE NO RECENT FOLLOWING PROJECTS**************/}
               <div className="tab-content">
                {following.length === 0 && (
                  <div className="empty-state">
                    <img src={empty} alt="empty" className="empty-icon" />
                    <h1 className="no-projects">
                      You are not following any projects.
                    </h1>
                  </div>
                )}

              </div>
              
              <div className="explore-projects-array">
                {following.map(project => (
                  <div className="project-content" key={project.projectId}>
                    <Link to={`/project/${project.projectId}`}>
                      <>
                        <div className="project-info">
                          {project.projectName &&
                          project.projectName.length > 35 ? (
                            <h1>{project.projectName.slice(0, 35)}...</h1>
                          ) : (
                            <h1>{project.projectName}</h1>
                          )}
                          <h1 className="created">
                            {moment(project.created_at).format('MMM DD, YYYY')}
                          </h1>
                        </div>
                        <img
                          src={
                            project.projectImage
                              ? project.projectImage
                              : defaultImg
                          }
                          className="project-thumbnail"
                          alt="test"
                          key={project.projectId}
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

  }//end if
  else {
    return <Loading />;    
  }

};

export default ExploreTabs;
