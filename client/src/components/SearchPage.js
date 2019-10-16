import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import defaultImg from '../ASSETS/default_thumbnail.svg';

import SearchUserCard from './SearchUserCard';

import '../SASS/SearchPage.scss';
import '../SASS/UserProfile.scss';

class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  displayUsers = () => {
    return this.props.searchData.users.map((user, index) => {
      return <SearchUserCard user={user} key={index} />;
    });
  };

  displayProjects = () => {
    return this.props.searchData.projects.map((project, index) => {
      return (
        <div className="project-content" key={index}>
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
      );
    });
  };

  render() {
    return (
      <div className="search-container">
        <p>
          results for <span>searchterm</span>
        </p>
        <div className="search-tabs-container">
          <Tabs>
            <TabList className="nav-links">
              <Tab className="links" selectedClassName="active-link">
                Users
              </Tab>
              <Tab className="links" selectedClassName="active-link">
                Projects
              </Tab>
            </TabList>
            <div className="tabs-container">
              <TabPanel>
                {this.props.searchData.users && this.displayUsers()}
              </TabPanel>
              <TabPanel>
                <div className="projects-array">
                  {this.props.searchData.projects && this.displayProjects()}
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default SearchPage;
