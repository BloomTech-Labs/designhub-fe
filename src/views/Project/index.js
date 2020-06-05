import React from 'react';
import Layout from '../../common/Layout';
import { useParams } from 'react-router-dom';
import './styles.scss';

export default function Projects() {
  const { id } = useParams();
  return (
    <Layout>
      <h1>Projects!</h1>
      <h3>Project id: {id}</h3>
    </Layout>
  );
}
