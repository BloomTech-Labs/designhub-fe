import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers, getAllProjects, getSingleUser } from '../store/actions';

const ReduxTestComponent = ({
  getUsers,
  isLoading,
  users,
  getAllProjects,
  allProjects,
  getSingleUser,
  singleUser
}) => {
  useEffect(() => {
    getUsers();
    getAllProjects();
    getSingleUser(3);
  }, []);

  return (
    <div style={{ marginTop: '200px', color: 'white' }}>
      <div>
        <h1 style={{ fontSize: '2rem' }}>Testing get all users router:</h1>
        {!isLoading && users ? (
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
        {!isLoading && allProjects ? (
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
        {!isLoading && singleUser ? (
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
          Testing get single user by ID router:
        </h1>
        {!isLoading && singleUser ? (
          <div key={singleUser.username}>
            <h2>{singleUser.username}</h2>
          </div>
        ) : (
          <h4>Loading projects...</h4>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users.allUsers,
    isLoading: state.users.isLoading,
    allProjects: state.projects.allProjects,
    singleUser: state.users.singleUser
  };
};

export default connect(
  mapStateToProps,
  { getUsers, getAllProjects, getSingleUser }
)(ReduxTestComponent);
