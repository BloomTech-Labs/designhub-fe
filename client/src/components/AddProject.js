import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProject } from '../store/actions';
import { useAuth0 } from '../auth-wrapper.js';

import '../SASS/Project.scss';

const AddProject = ({ addProject }) => {
  const { user } = useAuth0();

  const [project, setProject] = useState({
    userId: user.id,
    projectName: ''
  });

  const { userId, projectName } = project;

  const handleChanges = e => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addProject(project).then(res => setProject({ projectName: '' }));
  };

  return (
    <div style={{ marginTop: '78px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={projectName}
          name="projectName"
          placeholder="Project Name"
          onChange={handleChanges}
        />
        <button type="submit">Add Project</button>
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
