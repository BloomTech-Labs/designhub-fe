import React from 'react';
import Layout from '../../common/Layout';
import ExploreTabs from '../Explore/ExploreTabs';
import './styles.scss';

export default function Explore() {

  return (
    <Layout>
      <div className="explore-container">
        <ExploreTabs />
      </div>
    </Layout>
  );
}
