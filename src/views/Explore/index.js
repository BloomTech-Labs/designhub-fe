import React from 'react';
import Layout from '../../common/Layout';
import CreateProject from '../CreateProject/index';
import './styles.scss';

export default function Explore() {
  return (
    <Layout>
      <h1>Explore Page!</h1>
      <CreateProject />
    </Layout>
  );
}
