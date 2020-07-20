import React, { useState, useEffect } from 'react';
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
  console.log('allProjects', allProjects);

  const [categoryId, setCategoryId] = useState(0);

  let currentTab = 0;

  let getIllustrations = allProjects?.projects.filter((project) => {
    if (project?.category === 'Illustration') {
      return project;
    }
  });
  console.log('getIllustrations', getIllustrations);
  // Create ID

  let illustrations = getIllustrations?.reduce((illustrations, project) => {
    const catId = 0;
    illustrations.push(project);
    return illustrations;
  }, []);
  console.log('illustrations', illustrations);

  let getWebDesign = allProjects?.projects.filter((project) => {
    if (project?.category === 'Web Design') {
      return project;
    }
  });
  let webDesign = getWebDesign?.reduce((webDesign, project) => {
    const catId = 1;
    webDesign.push(project);
    return webDesign;
  }, []);
  console.log('webDesign', webDesign);

  let getGraphicDesign = allProjects?.projects.filter((project) => {
    if (project?.category === 'Graphic Design') {
      return project;
    }
  });
  let graphicDesign = getGraphicDesign?.reduce((graphicDesign, project) => {
    const catId = 2;
    graphicDesign.push(project);
    return graphicDesign;
  }, []);
  console.log('graphicDesign', graphicDesign);

  let getUXDesign = allProjects?.projects.filter((project) => {
    if (project?.category === 'UX Design') {
      return project;
    }
  });
  let uXDesign = getUXDesign?.reduce((uXDesign, project) => {
    const catId = 3;
    uXDesign.push(project);
    return uXDesign;
  }, []);
  console.log('uXDesign', uXDesign);

  let getUIDesign = allProjects?.projects.filter((project) => {
    if (project?.category === 'UI Design') {
      return project;
    }
  });
  let uIDesign = getUIDesign?.reduce((uIDesign, project) => {
    const catId = 4;
    uIDesign.push(project);
    return uIDesign;
  }, []);
  console.log('uIDesign', uIDesign);

  let getMotionDesign = allProjects?.projects.filter((project) => {
    if (project?.category === 'Motion Design') {
      return project;
    }
  });
  let motionDesign = getMotionDesign?.reduce((motionDesign, project) => {
    const catId = 5;
    motionDesign.push(project);
    return motionDesign;
  }, []);
  console.log('motionDesign', motionDesign);

  let getAnimation = allProjects?.projects.filter((project) => {
    if (project?.category === 'Animation') {
      return project;
    }
  });
      let animation = getAnimation?.reduce((animation,  project) => {
     const catId = 6
     animation.push(project);
  return animation;
}, []);
    console.log('animation', animation)

  let getProductDesign = allProjects?.projects.filter((project) => {
    if (project?.category === 'ProductDesign') {
      return project;
    }
  });
        let productDesign = getProductDesign?.reduce((productDesign,  project) => {
     const catId = 7
     productDesign.push(project);
  return productDesign;
}, []);
    console.log('productDesign', productDesign)
  // //get category name
  // useEffect(
  //   illustrations,
  //   webDesign,
  //   graphicDesign,
  //   uIDesign,
  //   uXDesign,
  //   productDesign,
  //   motionDesign,
  //   animation,
  //   []
  // );

  //each time a category is selected in the categories drop down list
  let categoryNames = {
    illustrations,
    webDesign,
    graphicDesign,
    uIDesign,
    uXDesign,
    productDesign,
    motionDesign,
    animation
  };
  console.log('categoryNames', categoryNames);
  console.log('categoryId', categoryId);
  const categoryHandler = (catId) => {
    setCategoryId(catId);
  };
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
              {allProjects?.projects?.map((category, index) => {
                return (
                  <Tab
                    key={category.id}
                    className={`tabs-${index}`}
                    selectedClassName="active-link"
                    onClick={() => categoryHandler(category.id)}
                  >
                    <p className="linkText">
                      {category.category.toUpperCase()}
                    </p>
                  </Tab>
                );
              })}
            </div>
          </TabList>
          <TabPanel className="tabs-container">
            <AllTab allProjects={allProjects} users={allUsers} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <Illustration
              getIllustrations={getIllustrations}
              illustrations={illustrations}
              users={allUsers}
            />
          </TabPanel>
          <TabPanel className="tabs-container">
            <WebDesign allProjects={allProjects} users={allUsers} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <GrapicDesign allProjects={allProjects} users={allUsers} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <UXDesign allProjects={allProjects} users={allUsers} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <UIDesign allProjects={allProjects} users={allUsers} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <MotionDesign allProjects={allProjects} users={allUsers} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <Animation allProjects={allProjects} />
          </TabPanel>
          <TabPanel className="tabs-container">
            <ProductDesign allProjects={allProjects} users={allUsers} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
