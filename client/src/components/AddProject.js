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
        <div>
          <label for="projectName">Project title</label>
          <input
            type="text"
            value={projectName}
            name="projectName"
            id="projectName"
            placeholder="Enter project title here"
            onChange={handleChanges}
          />
          <label for="projectDescription">Project description</label>
          <input
            id="projectDescription"
            type="text"
            placeholder="Enter project description here"
          />
          <label for="teamMembers">Add team members</label>
          <input
            type="text"
            placeholder="Enter team member usernames seperated by a comma"
            id="teamMembers"
          />
        </div>

        <div>
          <h3>Attach files</h3>
          <button type="submit">Attach files</button>

          <h3>Included files</h3>
          <p>File names will populate here</p>
          <label for="figmaLink">Figma link</label>
          <input
            type="text"
            placeholder="Enter Figma link here"
            id="figmaLink"
          />
          <label for="invisionLink">Figma link</label>
          <input
            type="text"
            placeholder="Enter InVision link here"
            id="invisionLink"
          />
        </div>

        <button type="submit">Publish</button>
        <button type="button">Cancel</button>
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
