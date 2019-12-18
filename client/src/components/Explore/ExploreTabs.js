import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Loading from '../Loading';
import ProjectThumbnail from '../ProjectThumbnail';

import '../../SASS/Explore.scss';

import {
  getProjectsByCategoryId,
  getAllCategoryNames
} from '../../store/actions';

const ExploreTabs = ({ 
  getProjectsByCategoryId, 
  projectsByCategory, 
  categoryNames, 
  getAllCategoryNames, 
  recent, 
  popular, 
  following, 
  users 
}) => {

  const [categoryId, setCategoryId] = useState(0);

  const getNames = () => {
    getAllCategoryNames();
  };

  //get category name
  useEffect(getNames, []);  

   //each time a category is selected in the categories drop down list
   const categoryHandler = (id) => {
    
    setCategoryId(id); 
    getProjectsByCategoryId(id);    

    console.log("event id in explore tabs", id);   
        
  }   

  if (recent && popular && following && users.length > 0) {

    return (
      <div className="explore-tabs-container">
        <div>
          <Tabs>

            
            <TabList className = "explore-nav-links">

              {/*<div className = "explore-nav-div">*/}

              <Tab className="links" selectedClassName="active-link">
                Popular
              </Tab>
              <Tab className="links" selectedClassName="active-link">
                Recents
              </Tab>
              <Tab className="links" selectedClassName="active-link">
                Following
              </Tab>

              {/*CHIPS*/}
              {categoryNames.map( (category, index) => {
                    return <Tab className = "links" selectedClassName="active-link" onClick = {() => categoryHandler(category.id)}> 
                              {category.category} 
                           </Tab>
              })}              
             
              {/*</div> */}             


            </TabList>

            {/*<TabList className="explore-nav-links">*/}
            {/*<div className = "explore-nav-div">
              <Tab className="links" selectedClassName="active-link">
                Popular
              </Tab>
              <Tab className="links" selectedClassName="active-link">
                Recents
              </Tab>
              <Tab className="links" selectedClassName="active-link">
                Following
              </Tab>
            </div>
            </TabList>*/}

            {/* // ======== Popular Tab ======== // */}
            <TabPanel className="tabs-container">

              <div className="explore-projects-array">
                {popular.map(project => {
                  const user = users.find(user => user.id === project.userId);
                  return <ProjectThumbnail project={project} user={user} key={project.id} />
                }
                )}
              </div>
              </TabPanel>

            {/* // ======== Recents Tab ======== // */}
            <TabPanel className="tabs-container">

              <div className="explore-projects-array">
                {recent.map(project => {
                  const user = users.find(user => user.id === project.userId);
                  return <ProjectThumbnail project={project} user={user} key={project.id} />
                })}
              </div>
              </TabPanel>

            {/* // ======== Following Tab ======== // */}
            <TabPanel className="tabs-container">

              <div className="explore-projects-array">
                {following.map(project => {
                  const user = users.find(user => user.id === project.userId);
                  return <ProjectThumbnail project={project} user={user} key={project.id} />
                }
                )}
              </div>
              </TabPanel>


            {/* // ======== Animation Tab ======== // */}
            <TabPanel className="tabs-container">

              <div className="explore-projects-array">              
                              

                {projectsByCategory.map(project => {
                  const user = users.find(user => user.id === project.userId);
                  return <ProjectThumbnail project={project} user={user} key={project.id} />
                }
                )}
              </div>
            </TabPanel>

            {/* // ======== Branding Tab ======== // */}
            <TabPanel className="tabs-container">

              <div className="explore-projects-array">              
                              

                {projectsByCategory.map(project => {
                  const user = users.find(user => user.id === project.userId);
                  return <ProjectThumbnail project={project} user={user} key={project.id} />
                }
                )}
              </div>
            </TabPanel>

            
            {/* // ======== Illustration Tab ======== // */}
            <TabPanel className="tabs-container">

              <div className="explore-projects-array">              
                              

                {projectsByCategory.map(project => {
                  const user = users.find(user => user.id === project.userId);
                  return <ProjectThumbnail project={project} user={user} key={project.id} />
                }
                )}
              </div>
            </TabPanel>

            {/* // ======== Mobile Tab ======== // */}
            <TabPanel className="tabs-container">

              <div className="explore-projects-array">              
                              

                {projectsByCategory.map(project => {
                  const user = users.find(user => user.id === project.userId);
                  return <ProjectThumbnail project={project} user={user} key={project.id} />
                }
                )}
              </div>
            </TabPanel>

            {/* // ======== Typography Tab ======== // */}
            <TabPanel className="tabs-container">

              <div className="explore-projects-array">              
                              

                {projectsByCategory.map(project => {
                  const user = users.find(user => user.id === project.userId);
                  return <ProjectThumbnail project={project} user={user} key={project.id} />
                }
                )}
              </div>
            </TabPanel>

            {/* // ======== Web Design Tab ======== // */}
            <TabPanel className="tabs-container">

              <div className="explore-projects-array">              
                              

                {projectsByCategory.map(project => {
                  const user = users.find(user => user.id === project.userId);
                  return <ProjectThumbnail project={project} user={user} key={project.id} />
                }
                )}
              </div>
            </TabPanel>

            {/* // ======== Product Design Tab ======== // */}
            <TabPanel className="tabs-container">

              <div className="explore-projects-array">              
                              

                {projectsByCategory.map(project => {
                  const user = users.find(user => user.id === project.userId);
                  return <ProjectThumbnail project={project} user={user} key={project.id} />
                }
                )}
              </div>
            </TabPanel>

            
          </Tabs>
        </div>
      </div>
    );

  }//end if
  else {
    return <Loading />;
  }

};

const mapStateToProps = state => {
  return {
    projectsByCategory: state.categories.projectsByCategory,
    categoryNames: state.categories.categoryNames
  };
};


export default connect(mapStateToProps, { getProjectsByCategoryId, getAllCategoryNames })(ExploreTabs);
