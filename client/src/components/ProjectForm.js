import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useAuth0 } from '../auth-wrapper.js';

import '../SASS/ProjectForm.scss';

const ProjectForm = () => {
  const { user } = useAuth0();

  const [project, setProject] = useState({
    userId: user.id,
    projectName: ''
  });

  const { projectName } = project;

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
    <div className="project-form-wrapper">
      <h2>Create a project</h2>
      <form className="project-form-container" onSubmit={handleSubmit}>
        <div className="inner-form-container">
          <div className="project-form-left-column">
            <label htmlFor="projectName">Project title</label>
            <input
              type="text"
              value={projectName}
              name="projectName"
              id="projectName"
              placeholder="Enter project title here"
              onChange={handleChanges}
            />
            <label htmlFor="projectDescription">Project description</label>
            <input
              id="projectDescription"
              type="text"
              placeholder="Enter project description here"
            />
            <label htmlFor="teamMembers">Add team members</label>
            <input
              type="text"
              placeholder="Enter team member usernames seperated by a comma"
              id="teamMembers"
            />
          </div>

          <div className="project-form-right-column">
            <label>Attach files</label>
            <input type="file" />

            <label>Included files</label>
            <p>File names will populate here</p>
            <label htmlFor="figmaLink">Figma link</label>
            <input
              type="text"
              placeholder="Enter Figma link here"
              id="figmaLink"
            />
            <label htmlFor="invisionLink">Figma link</label>
            <input
              type="text"
              placeholder="Enter InVision link here"
              id="invisionLink"
            />
          </div>
        </div>
        <div className="form-buttons-container">
          <button className="submit-button" type="submit">
            Publish
          </button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

const mapSTateToProps = state => {
  return {};
};

export default connect(
  mapSTateToProps,
  {}
)(ProjectForm);
