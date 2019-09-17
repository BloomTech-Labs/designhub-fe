import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers, getAllProjects } from '../store/actions';

const ReduxTestComponent = ({ getUsers, isLoading, users }) => {
  useEffect(() => {
    getUsers();
    getAllProjects();
  }, [getUsers]);

  return (
    <div style={{ marginTop: '200px', color: 'white' }}>
      <h1 style={{ fontSize: '2rem' }}>Testing get all users router:</h1>
      {!isLoading && users ? (
        users.map(user => {
          console.log(user);
          return (
            <div key={user.username}>
              <h2>{user.username}</h2>
            </div>
          );
        })
      ) : (
        <h4>Loading users...</h4>
      )}
      <br />
      <h1 style={{ fontSize: '2rem' }}>Testing get all projects router:</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.users.users,
    isLoading: state.users.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getUsers }
)(ReduxTestComponent);
