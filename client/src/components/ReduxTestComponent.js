import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getAllUsers,
  getAllProjects,
  getSingleUser,
  updateUser,
  getSingleProject,
  addProject,
  updateProject,
  deleteProject
} from '../store/actions';

const ReduxTestComponent = ({
  getAllUsers,
  isLoading,
  users,
  getAllProjects,
  allProjects,
  getSingleUser,
  singleUser,
  updateUser,
  getSingleProject,
  singleProject,
  updateProject,
  deleteProject,
  addProject
}) => {
  useEffect(() => {
    getSingleUser(3);
    updateUser(6, { email: 'mike.vansleen2@gmail.com' });
    getAllUsers();
    updateProject(22, { projectName: "Mike's Project Yo!" });
    deleteProject(21);
    getSingleProject(4);
    getAllProjects();
  }, [getAllProjects]);

  const addNewProject = () => {
    addProject({
      userId: 6,
      private: false,
      projectName: "Mike's amazing designz"
    }).then(res => getAllProjects());
  };

  return (
    <div style={{ marginTop: '200px', color: 'white' }}>
      <div>
        <h1 style={{ fontSize: '2rem' }}>Testing get all users router:</h1>
        {users ? (
          users.map(user => {
            return (
              <div key={user.username}>
                <h2>{user.username}</h2>
              </div>
            );
          })
        ) : (
          <h4>Loading users...</h4>
        )}
      </div>
      <br />
      <br />
      <div>
        <h1 style={{ fontSize: '2rem' }}>Testing get all projects router:</h1>
        {allProjects ? (
          allProjects.map(project => {
            return (
              <div key={project.id}>
                <h2>{project.projectName}</h2>
              </div>
            );
          })
        ) : (
          <h4>Loading projects...</h4>
        )}
      </div>
      <br />
      <br />
      <div>
        <h1 style={{ fontSize: '2rem' }}>
          Testing get single user by ID router:
        </h1>
        {singleUser ? (
          <div key={singleUser.username}>
            <h2>{singleUser.username}</h2>
          </div>
        ) : (
          <h4>Loading projects...</h4>
        )}
      </div>
      <br />
      <br />
      <div>
        <h1 style={{ fontSize: '2rem' }}>
          Testing get single project by ID router:
        </h1>
        {singleProject ? (
          <div>
            <h2>{singleProject.projectName}</h2>
          </div>
        ) : (
          <h4>Loading projects...</h4>
        )}
      </div>
      <br />
      <br />
      <div>
        <h1 style={{ fontSize: '2rem' }}>Testing add a project router:</h1>
        <button onClick={addNewProject}>Add a Project</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users.allUsers,
    isLoading: state.users.isLoading,
    allProjects: state.projects.allProjects,
    singleUser: state.users.singleUser,
    singleProject: state.projects.singleProject
  };
};

export default connect(
  mapStateToProps,
  {
    getAllUsers,
    getAllProjects,
    getSingleUser,
    updateUser,
    getSingleProject,
    addProject,
    updateProject,
    deleteProject
  }
)(ReduxTestComponent);
