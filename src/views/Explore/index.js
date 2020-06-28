import React from 'react';
import Layout from '../../common/Layout';
import ExploreTabs from '../Explore/ExploreTabs';
import './styles.scss';


export default function Explore() {


  // console.log('GET ALL PROJECTS', allProjects);
  return (
    <Layout>
      <h1>Explore Page!</h1>
      <div className="explore-container">
        <p>Discover projects from our talented community of Designers</p>
        <ExploreTabs />
      </div>
    </Layout>
  );
}
