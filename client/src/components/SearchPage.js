import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import SearchUserCard from './SearchUserCard';

import '../SASS/SearchPage.scss';

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
        <div key={index}>
          <h3 style={{ color: 'white' }}>{project.name}</h3>
          <img
            src={project.mainImg}
            alt="project"
            style={{ height: '30%', width: '30%' }}
          />
        </div>
      );
    });
  };

  render() {
    console.log(this.props);
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
            <TabPanel className="tabs-container">
              {this.props.searchData.users && this.displayUsers()}
            </TabPanel>
            <TabPanel className="tabs-container">
              {this.props.searchData.projects && this.displayProjects()}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default SearchPage;
