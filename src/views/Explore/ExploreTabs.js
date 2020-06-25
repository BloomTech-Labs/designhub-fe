import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';

import AllTab from './AllTab';
import Illustration from './Illustration';
import WebDesign from './WebDesign';
import GrapicDesign from './GraphicDesign';
import UXDesign from './UXDesign';
import UIDesign from './UIDesign';
import MotionDesign from './MotionDesign';
import Animation from './Animation';
import ProductDesign from './ProductDesign';
import { useQuery } from '@apollo/react-hooks';

import {
  GET_ALL_PROJECTS_QUERY,
  GET_ALL_USERS_QUERY,
} from '../../graphql/index';

export default function ExploreTabs() {
  const { data: allProjects } = useQuery(GET_ALL_PROJECTS_QUERY);
  const { data: allUsers } = useQuery(GET_ALL_USERS_QUERY);
  return (
    <div className="explore-tabs-container">
      <div>
        <Tabs defaultIndex={0}>
          <TabList className="explore-nav-links">
            {/*<div className = "explore-nav-div">*/}

            <Tab key={0} className="tabs-8">
              All
            </Tab>

            {/*CHIPS*/}

            {/*</div> */}
          </TabList>
          <AllTab projects={allProjects} users={allUsers} />
          <Illustration projects={allProjects} users={allUsers} />
          <WebDesign projects={allProjects} users={allUsers} />
          <GrapicDesign projects={allProjects} users={allUsers} />
          <UXDesign projects={allProjects} users={allUsers} />
          <UIDesign projects={allProjects} users={allUsers} />
          <MotionDesign projects={allProjects} users={allUsers} />
          <Animation projects={allProjects} />
          <ProductDesign projects={allProjects} users={allUsers} />
        </Tabs>
      </div>
    </div>
  );
}
