import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  displayUsers = () => {
    return this.props.searchData.users.map((user, index) => {
      return (
        <div
          key={index}
          style={{
            color: 'white'
          }}
        >
          <h3 style={{ color: 'white' }}>{user.username}</h3>
          <p style={{ color: 'white' }}>{user.email}</p>
          <img
            src={user.avatar}
            alt="avatar"
            style={{ height: '200px', width: '200px' }}
          />
          <p style={{ color: 'white', width: '350px' }}>{user.bio}</p>
        </div>
      );
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
      <div>
        <Tabs style={{ marginTop: '100px' }}>
          <TabList className="nav-links">
            <Tab
              className="links"
              selectedClassName="active-link"
              style={{ color: 'white' }}
            >
              Users
            </Tab>
            <Tab
              className="links"
              selectedClassName="active-link"
              style={{ color: 'white' }}
            >
              Projects
            </Tab>
          </TabList>
          <TabPanel
            className="tabs-container"
            style={{
              border: '1px solid white',
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px',
              flexWrap: 'wrap'
            }}
          >
            {this.props.searchData.users && this.displayUsers()}
          </TabPanel>
          <TabPanel className="tabs-container">
            {this.props.searchData.projects && this.displayProjects()}
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default SearchPage;
