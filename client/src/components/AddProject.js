import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addProject } from '../store/actions';

import '../SASS/Project.scss';

const AddProject = () => {
  return (
    <div style={{ marginTop: '78px' }}>
      <form>
        <input type="number" placeholder="user ID" />
        <input type="text" placeholder="Project Name" />
        <button>Add Project</button>
      </form>
    </div>
  );
};

const mapSTateToProps = state => {
  return {};
};

export default connect(
  mapSTateToProps,
  { addProject }
)(AddProject);
