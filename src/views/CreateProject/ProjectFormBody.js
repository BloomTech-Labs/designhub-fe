import React, { useState, useEffect } from 'react';
import Editing from './Editing';
import Privacy from './Privacy';
import CaseStudy from './CaseStudy';
import DeleteProjectModal from './DeleteProjectModal';
import InviteModal from './InviteModal';
import CharacterCount from '../../common/CharacterCount/CharacterCount';
import DeleteIcon from '../../ASSETS/Icons/DeleteIcon.js';
import { MultiImageUpload } from './MultiImageUpload';

import { useAuth0 } from '../../utilities/auth-spa.js';
import { useMutation, useQuery } from '@apollo/react-hooks';
import {
  ADD_PROJECT_MUTATION,
  ADD_PROJECT_PHOTO_MUTATION,
  UPDATE_PROJECT_MUTATION,
  UPDATE_PROJECT_PHOTO_MUTATION,
  DELETE_PROJECT_PHOTO_MUTATION,
  DELETE_PROJECT_MUTATION
} from '../../graphql/index';


import './styles.scss';

import remove from '../../ASSETS/remove.svg';

const ProjectFromBody = ({
  isEditing,
  project,
  projectPhotos,
  userData,
  user
}) => {

 console.log('PROJECT USER', userData)

  const [files, setFiles] = useState([]);
  const [researchFile, setResearchFile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [titleRef, setTitleRef] = useState(null);
  const [error, setError] = useState('');
  const [privacy, setPrivacy] = useState(

    isEditing ? (project.privateProjects ? 'private' : 'public') : 'public'
  );
    const [newProject, setNewProject] = useState({
    project: {
      userId: user?.sub,
      name: isEditing ? project?.name : '',
      description: isEditing ? project?.description : '',
      figma: isEditing ? project?.figma : '',
      invision: isEditing ? project?.invision : '',
      privateProjects: isEditing ? project?.privateProjects : false,
      mainImg: isEditing ? project?.mainImg : '',
      category: isEditing ? project?.category : '',
      // projectInvites: projectInvites,
    },
    success: false,
    url: '',
    modal: false,
    deletingImage: null,
    deletingResearch: null,
    inviteModal: false,
    projectPhotos: null,
    inviteList: [], //users invited to a project
    email: '',
    //categoryId: null,
    //foundProjectCategory,
  });
  
  const { name, description, figma, invision} = newProject?.project;

    const handleChanges = (e) => {
    setError('');
    setNewProject({
      ...newProject,
      project: {
        ...newProject.project,
        [e.target.name]: e.target.value,
      },
    });
    console.log('NEW PROJECT CHANGE', newProject?.project)
  };

    const handlePrivacySetting = (e) => {
    setPrivacy(e.target.value);
    const isPrivate = e.target.value === 'private' ? true : false;

    setNewProject({
      ...newProject,
      project: {
        ...newProject.project,
        privateProjects: isPrivate,
      },
    });
  };

  const [editProject] = useMutation(UPDATE_PROJECT_MUTATION)
  const [createProject] = useMutation(ADD_PROJECT_MUTATION);


  //create project
  const handleSubmit = async (e) => {
    setIsLoading(true);

    e.preventDefault();
    if (newProject.project.name.length === 0) {
      setIsLoading(false);
      setError('Project title is required');
      titleRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (files.length > 0 || (projectPhotos && projectPhotos.length > 0)) {
      isEditing
        ? editProject(newProject.project, project.id)
        : createProject(newProject.project);
    } else {
      setIsLoading(false);
      setError('Please upload at least one image');
      return;
    }
  };

  const [projectCategories, setProjectCategories]= useState({
    
  })
  //each time a category is selected in the categories drop down list
  const categoryHandler = (event) => {
    event.preventDefault();
    newProject.project.category = event.target.value;

    console.log('event.target.value', event.target.value);
  };

  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
  };

  return (
    <>
      <DeleteProjectModal modal={newProject.modal} deletingImage={newProject.deletingImage} deletingResearch={newProject.deletingResearch} />
        <div className="project-form-wrapper">
          <InviteModal />
        </div>
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
              value={name}
              name="name"
              id="name"
              placeholder="Enter project title here"
              onChange={handleChanges}
              ref={setTitleRef}
            />
          </div>
          <label htmlFor="description" className="label">
            Project description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            type="text"
            placeholder="Enter description here"
            onChange={handleChanges}
            className="description"
            maxLength="240"
          />
          <CharacterCount string={description} limit={240} />

            {/*PROJECT CATEGORIES */}
            <label htmlFor="privacyLink" className="label">
              Categories
            </label>
            <select
              type="select"
              name="categories"
              placeholder="Category (ex: Art, Animation)"
              onChange={categoryHandler}
              className="category-select"
            >
              {/*if editing a project and a category was previously selected for the project
                   display that category as the default selection. if not, dispay the defaut option */}
{/*              {isEditing && projectCategories[0] ? (
                <option value="" disabled selected hidden>
                  {projectCategories[0].category}
                </option>
              ) : (
                <option value="" disabled selected hidden>
                  Please Select a Category
                </option>
              )}
*/}
                <option value="" disabled selected hidden>
                  Please Select a Category
                </option>
              {categoryNames.map((category, index) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.category}
                  </option>
                );
              })}
            </select>

          <label htmlFor="figmaLink" className="label">
            Figma
          </label>
          <input
            type="text"
            name="figma"
            value={figma}
            placeholder="Enter link here (optional)"
            id="figmaLink"
            onChange={handleChanges}
          />
          <label htmlFor="invisionLink" className="label">
            Prototype
          </label>
          <input
            type="text"
            name="invision"
            value={invision}
            placeholder="Enter link here (optional)"
            id="invisionLink"
            onChange={handleChanges}
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
    </>
  );
};

export default ProjectFromBody;
