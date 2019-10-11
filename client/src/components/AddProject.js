import React from 'react';
import ProjectForm from './ProjectForm';

const AddProject = ({ activeUser }) => {
  return <ProjectForm user={activeUser} />;
};

export default AddProject;
