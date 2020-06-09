import React from 'react';
import Layout from '../../common/Layout';
import ProjectForm from './ProjectForm';
import './styles.scss';

export default function CreateProject() {
  return (
    <Layout>
      <h1>Create Project!</h1>
      <ProjectForm />
    </Layout>
  );
}
