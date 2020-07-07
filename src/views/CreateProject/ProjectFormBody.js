import React, {useState} from 'react';
import Editing from './Editing';
import Privacy from './Privacy';
import CaseStudy from './CaseStudy';
import CharacterCount from '../../common/CharacterCount/CharacterCount';
import DeleteIcon from '../../ASSETS/Icons/DeleteIcon.js';
import { MultiImageUpload } from './MultiImageUpload';


import {addProject, addProjectPhoto, addHeatmap, updateProject, deleteProjectPhoto} from '../../graphql/index';
import './styles.scss';

import remove from '../../ASSETS/remove.svg'


const ProjectFromBody = ({ isEditing, project, user, projectPhotos, ...rest }) => {
  

  const [files, setFiles] = useState([]);
  const [researchFile, setResearchFile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [titleRef, setTitleRef] = useState(null);
  const [error, setError] = useState('');
  const [privacy, setPrivacy] = useState(
    isEditing ? (project.privateProjects ? 'private' : 'public') : 'public'
  );
  
    const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
  };

console.log("something")


  return (

    <section className="ProjectForm__body">
      <div className="left-container">
        <header className="ProjectForm__header">
          <h2 className="page-header"></h2>
        </header>
        <MultiImageUpload files={files} setFiles={setFiles} />
        {isEditing && (
        <div>
          <div className="thumbnail-container ">
{projectPhotos.map((photo, index) => (
            <div key={index}>
              <img
                alt=""
                src={remove}
                className="remove"
                onClick={(e) => {
                  console.log("setPhoto")
                              
          }}
              />


              <div className="thumb" key={index}>
                <div style={thumbInner}>
                  <img
                    alt="project thumbnail"
                    src={photo.url}
                    className="thumbnail"
                  />
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        )}
      </div>
      <div className="right-container">
        <form encType="multipart/form-data" className="project-form-container">
          <div className="required">
            <label htmlFor="name" className="label project-label">
              Project title *
            </label>
            <input
              required
              autoFocus={true}
              type="text"
              /*value={name}*/
              name="name"
              id="name"
              placeholder="Enter project title here"
              /*onChange={handleChanges}*/
              /*ref={setTitleRef}*/
            />
          </div>
          <label htmlFor="description" className="label">
            Project description
          </label>
          <textarea
            id="description"
            name="description"
            /*value={description}*/
            type="text"
            placeholder="Enter description here"
            /*onChange={handleChanges}*/
            className="description"
            maxLength="240"
          />
          <CharacterCount /*string={description}*/ limit={240} />

          {/*PROJECT CATEGORIES */}
          <label htmlFor="privacyLink" className="label">
            Categories
          </label>
          <select
            type="select"
            name="categories"
            placeholder="Category (ex: Art, Animation)"
            /*onChange={categoryHandler}*/
            className="category-select"
          >
            {/*if editing a project and a category was previously selected for the project
                   display that category as the default selection. if not, dispay the defaut option */}
            {/*            <option value="" disabled selected hidden>
              {projectCategories[0].category}
            </option>*/}
            {/*):(*/}
            <option value="" disabled selected hidden>
              Please Select a Category
            </option>
            <option /*key={category.id} value={category.id}*/>
              category.category
            </option>
            );
          </select>

          <label htmlFor="figmaLink" className="label">
            Figma
          </label>
          <input
            type="text"
            name="figma"
            /*value={figma}*/
            placeholder="Enter link here (optional)"
            id="figmaLink"
            /*onChange={handleChanges}*/
          />
          <label htmlFor="invisionLink" className="label">
            Prototype
          </label>
          <input
            type="text"
            name="invision"
            /*value={invision}*/
            placeholder="Enter link here (optional)"
            id="invisionLink"
            /*onChange={handleChanges}*/
          />

          <CaseStudy />
          <Privacy />
          <Editing />
          <div className="submit-cancel-container">
            <button type="button" className="cancel-btn">
              Cancel
            </button>
            <button className="submit-button" type="submit"></button>
          </div>
          <div className="error">error</div>

          <div className="delete-project-button">
            <DeleteIcon />
            <p>Delete project</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProjectFromBody;
