import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
            <div className="explore-nav-div">
              <Tab key={0} className="tabs-8">
                All
              </Tab>

              {/*CHIPS*/}
            </div>
          </TabList>
          <TabPanel className="tabs-container">
            <AllTab projects={allProjects} users={allUsers} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <Illustration projects={allProjects} users={allUsers} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <WebDesign projects={allProjects} users={allUsers} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <GrapicDesign projects={allProjects} users={allUsers} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <UXDesign projects={allProjects} users={allUsers} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <UIDesign projects={allProjects} users={allUsers} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <MotionDesign projects={allProjects} users={allUsers} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <Animation projects={allProjects} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <ProductDesign projects={allProjects} users={allUsers} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}