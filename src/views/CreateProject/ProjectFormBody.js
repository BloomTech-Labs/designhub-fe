import React, { useState, useEffect } from 'react';
import Editing from './Editing';
import Privacy from './Privacy';
import CaseStudy from './CaseStudy';
import DeleteProjectModal from './DeleteProjectModal';
import InviteModal from './InviteModal';
import CharacterCount from '../../common/CharacterCount/CharacterCount';
import DeleteIcon from '../../ASSETS/Icons/DeleteIcon.js';
import ThumbnailContainer from './ThumbnailContainer';
import { MultiImageUpload } from './MultiImageUpload';
import { storage } from '../../utilities/firebase';
import { useAuth0 } from '../../utilities/auth-spa.js';
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import {
  ADD_PROJECT_MUTATION,
  ADD_PROJECT_PHOTO_MUTATION,
  UPDATE_PROJECT_MUTATION,
  UPDATE_PROJECT_PHOTO_MUTATION,
  DELETE_PROJECT_PHOTO_MUTATION,
  DELETE_PROJECT_MUTATION,
  GET_PROJECT_BY_ID_QUERY,
} from '../../graphql/index';

import './styles.scss';

const ProjectFromBody = ({
  isEditing,
  project,
  projectPhotos,
  userData,
  user,
  //history,
}) => {
  //console.log('PROJECT USER', userData);
  const history = useHistory();
  const [files, setFiles] = useState([]);
  const [researchFile, setResearchFile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [titleRef, setTitleRef] = useState(null);
  const [error, setError] = useState('');
  const [privacy, setPrivacy] = useState(
    isEditing ? (project.privateProjects ? 'private' : 'public') : 'public'
  );
  const [newProjectData, setNewProjectData] = useState({
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

  const { name, description, figma, invision } = newProjectData?.project;

  const closeModal = () => {
    setNewProjectData({
      ...newProjectData,
      modal: false,
      deletingImage: null,
      deletingResearch: null,
    });
  };

  const handleChanges = (e) => {
    setError('');
    setNewProjectData({
      ...newProjectData,
      project: {
        ...newProjectData.project,
        [e.target.name]: e.target.value,
      },
    });
    //console.log('NEW PROJECT CHANGE', newProjectData?.project);
  };

  const handlePrivacySetting = (e) => {
    setPrivacy(e.target.value);
    const isPrivate = e.target.value === 'private' ? true : false;

    setNewProjectData({
      ...newProjectData,
      project: {
        ...newProjectData.project,
        privateProjects: isPrivate,
      },
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);

    e.preventDefault();
    if (newProjectData.project.name.length === 0) {
      setIsLoading(false);
      setError('Project title is required');
      titleRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    if (files.length > 0 || (projectPhotos && projectPhotos.length > 0)) {
      isEditing
        ? editProject(newProjectData.project, project.id)
        : createProject(newProjectData?.project);
    } else {
      setIsLoading(false);
      setError('Please upload at least one image');
      return;
    }
  };
  /*CATEGORY*/
  const categoryNames = [
    'Illustration',
    'webDesign',
    'graphicDesign',
    'uxDesign',
    'uiDesign',
    'motionDesign',
    'animation',
    'productDesign',
  ];
  //each time a category is selected in the categories drop down list
  const categoryHandler = (event) => {
    event.preventDefault();
    newProjectData.project.category = event.target.value;

    console.log('event.target.value', event.target.value);
  };
  /*CREATE PROJECT*/
  const [addProject] = useMutation(ADD_PROJECT_MUTATION);
  const [updateProject] = useMutation(UPDATE_PROJECT_MUTATION);
  const [addProjectPhoto] = useMutation(ADD_PROJECT_PHOTO_MUTATION);

  const handleResearchUpload = () => {
    console.log('not finished');
  };

  const handleImageUpload = async (files, projectId) => {
    const imageUrls = [];
    if (files.length > 0) {
      let requestPromises = await files.map(async (file) => {
        try {
          // console.log('FILE IMAGE UPLOAD', file);
          await storage.ref(`/images/${file.name}`).put(file);
          await storage
            .ref('images')
            .child(file.name)
            .getDownloadURL()
            .then(async (firebaseURL) => {
              imageUrls.push(firebaseURL);
              // console.log('FILENAME IMAGE UPLOAD', {
              //   fileName: file.name,
              //   projectId,
              //   firebaseURL,
              // });
              const { data } = await addProjectPhoto({
                variables: {
                  data: {
                    projectId,
                    url: firebaseURL,
                    description: 'image',
                    title: file?.name,
                  },
                },
              });
              console.log('addProjectDataURLS', imageUrls[0]);
            });
          console.log('addProjectDataURLS-2', imageUrls);
        } catch (err) {
          console.error('ProjectForm.js handleSubmit() ERROR', err);
        }
      });
      console.log('requestPromises', requestPromises);
      console.log('addProjectDataURLS-3', imageUrls[0]);
    }
    console.log('imageurls0', imageUrls);
    
    return await imageUrls[0];
  };

  const createProject = async (project) => {
   console.log('CREATENEWPROJECT image DATA!!!', [addProjectPhoto?.data?.url]);
    try {
      const { data } = await addProject({
        variables: {
          data: {
            userId: user?.sub,
            private: newProjectData?.project?.privateProjects,
            name: newProjectData?.project?.name,
            description: newProjectData?.project?.description,
            category: newProjectData?.project?.category,
            figma: newProjectData?.project?.figma,
            invision: newProjectData?.project?.invision,
            mainImg: newProjectData?.project?.mainImg,
          },
        },
        refetchQueries: [
          {
            query: GET_PROJECT_BY_ID_QUERY,
            variables: {
              id: project.id,
            },
          },
        ],
      });
      console.log('CREATE PROJECT DATA', newProjectData.project);
      const uploadedImage = await handleImageUpload(
        files,
        data?.addProject?.id,
        data?.addProject?.name
      );
      const newProject = {
        ...project,
        mainImg: addProjectPhoto[0]?.data?.url,
      };
      await updateProject(project?.id, newProject);
      console.log('DATA', data);
      await history.push(`/project/${data?.addProject?.id}`);

      return uploadedImage;
    } catch (err) {
      console.log('ProjectForm.js addProject ERROR', err);
    }
  };
  /*EDIT PROJECT*/
  const editProject = () => {
    console.log('not finished');
  };

  return (
    <>
      <DeleteProjectModal
        closeModal={closeModal}
        deletingImage={newProjectData.deletingImage}
        deletingResearch={newProjectData.deletingResearch}
      />
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
              <ThumbnailContainer />
            </div>
          )}
        </div>
        <div className="right-container">
          <form
            encType="multipart/form-data"
            className="project-form-container"
          >
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
              */}
              <option value="" disabled selected hidden>
                Please Select a Category
              </option>
              {/*)}*/}

              <option value="" disabled selected hidden>
                Please Select a Category
              </option>
              {categoryNames.map((category, index) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category}
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

            {/*<CaseStudy />*/}
            <Privacy />
            {/*<Editing />*/}
            <div className="submit-cancel-container">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
              <button
                className="submit-button"
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isEditing ? 'Save Changes' : 'Publish'}
              </button>
            </div>
            <div className="error">{error}</div>

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
