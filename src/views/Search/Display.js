import React from 'react';
import Users from './Users';
import Projects from './Projects';

export default function Display({ users, projects, loading }) {
  console.log('users', users);
  console.log('projects', projects);
  console.log('loading', loading);
  return (
    <div className="searchDisplay">
      <div>
        <h2>Search Results</h2>
      </div>
      <div className="searchResults">
        <div className="userSearch">
          <h4>Users</h4>
          <p>
            {users.length === 0 ? (
              <p> There is no such user! </p>
            ) : (
              <Users users={users} />
            )}
          </p>
        </div>

        <div className="projectSearch">
          <h4>Projects</h4>
          <p>
            {projects.length === 0 ? (
              <p> There is no such project! </p>
            ) : (
              <Projects projects={projects} />
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
