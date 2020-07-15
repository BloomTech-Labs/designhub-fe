<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 5ee28e61c497fa4a6f0b0c1805b358b86c4dfaa7
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

<<<<<<< HEAD
const ProjectFromBody = () => {
  const [error, setError] = useState('');
  const [state, setState] = useState();

  const handleChanges = (e) => {
    setError('');
    setState({
      ...state,
      project: {
        ...state.project,
=======
const ProjectFromBody = ({
  isEditing,
  project,
  projectPhotos,
  userData,
  user,
}) => {
  /*user is from AUTH0, userData is from graphQL*/
  // console.log('user props', user)
  // console.log('userData props', userData)
  // console.log('project props', project)

  /*____________APOLLO/GRAPHQL______________________________*/
  const [addProject] = useMutation(ADD_PROJECT_MUTATION);
  const [updateProject] = useMutation(UPDATE_PROJECT_MUTATION);
  const [addProjectPhoto] = useMutation(ADD_PROJECT_PHOTO_MUTATION);

  const history = useHistory();
  const [files, setFiles] = useState([]);
  const [researchFile, setResearchFile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [titleRef, setTitleRef] = useState(null);
  const [error, setError] = useState('');
  const [privacy, setPrivacy] = useState(
    isEditing ? (project.privateProjects ? 'private' : 'public') : 'public'
  );

  // const allInputs = { imgUrl: '' }

  const [imageAsUrl, setImageAsUrl] = useState([]);
  const [prjData, setPrjData] = useState({});

  const [newProjectData, setNewProjectData] = useState({
    project: {
      userId: user?.sub,
      name: isEditing ? project?.name : '',
      description: isEditing ? project?.description : '',
      figma: isEditing ? project?.figma : '',
      invision: isEditing ? project?.invision : '',
      privateProjects: isEditing ? project?.privateProjects : false,
      mainImg: isEditing ? project?.mainImg : '',
      category: isEditing ? project?.category : 'something',
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
  /*________CATEGORY STATE____________________________________________*/
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

  const { name, description, figma, invision } = newProjectData?.project;

  const closeModal = () => {
    setNewProjectData({
      ...newProjectData,
      modal: false,
      deletingImage: null,
      deletingResearch: null,
    });
  };
  /*___________________HANDLE CHANGE_____________________________*/
  const handleChanges = (e) => {
    setError('');
    setNewProjectData({
      ...newProjectData,
      project: {
        ...newProjectData.project,
>>>>>>> 5ee28e61c497fa4a6f0b0c1805b358b86c4dfaa7
        [e.target.name]: e.target.value,
      },
    });
  };
<<<<<<< HEAD
  return (
    <section className="ProjectForm__body">
      <div className="left-container">
        <header className="ProjectForm__header">
          <h2 className="page-header" />
        </header>
        <MultiImageUpload /*files={files} setFiles={setFiles} */ />

        <div>
          <div className="thumbnail-container ">
            <div /*key={index}*/>
              <img
                alt=""
                /*src={remove}*/
                className="remove"
              />
              <div className="thumb" /*key={index}*/>
                <div /*style={thumbInner}*/>
                  <img
                    alt="project thumbnail"
                    /*src={photo.url}*/
                    className="thumbnail"
                  />
                </div>
              </div>
=======
  /*___________________HANDLE PRIVACY_____________________________*/
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
  /*___________________HANDLE SUBMIT_____________________________*/
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
  /*_____________________HANDLE CATEGORY___________________________*/
  //each time a category is selected in the categories drop down list
  const categoryHandler = (event) => {
    event.preventDefault();
    newProjectData.project.category = event.target.value;
  };

  /*_____________________HANDLE IMAGE UPLOAD___________________________*/

  const imgUrl = [];
  const handleImageUpload = async (files, newProject) => {
    if (files.length > 0) {
      files.map(async (file) => {
        try {
          await storage.ref(`/images/${file.name}`).put(file);
          await storage
            .ref('images')
            .child(file.name)
            .getDownloadURL()

            .then(async (firebaseURL) => {
              imgUrl.push(firebaseURL);
            });
        } catch (err) {
          console.error('ProjectForm.js handleSubmit() ERROR', err);
        }
      });
      return new Promise((res) => res(newProject));
    }
  };

  const imageHandler = async (addProjectData) => {
    setTimeout( async()=>{
      imgUrl.forEach(async (url) => {
        const { data: addProjectPhotoData } = addProjectPhoto({
          variables: {
            data: {
              projectId: addProjectData?.id,
              url: url,
              description: 'image',
              title: addProjectData?.name,
            },
          },
          refetchQueries: [
            {
              query: GET_PROJECT_BY_ID_QUERY,
              variables: {
                id: addProjectData?.id,
              },
            },
          ],
        });
      });

      const { data: updateProjectData } = await updateProject({
        variables: {
          data: {
            id: addProjectData?.id,
            userId: user?.sub,
            name: addProjectData?.name,
            description: addProjectData?.description,
            category: addProjectData?.category,
            figma: addProjectData?.figma,
            invision: addProjectData?.invision,
            mainImg: imgUrl[0],
          },
        },
      });
    }, 3000)
      
    
  };

  /*______________________CREATE PROJECT__________________________*/

  const createProject = async (project, res) => {
    try {
      console.log('CREATENEWPROJECT image DATA!!!', imgUrl);
      const { data: addProjectData } = await addProject({
        variables: {
          data: {
            userId: user?.sub,
            private: newProjectData?.project?.privateProjects,
            name: newProjectData?.project?.name,
            description: newProjectData?.project?.description,
            category: newProjectData?.project?.category,
            figma: newProjectData?.project?.figma,
            invision: newProjectData?.project?.invision,
            //      mainImg: imgUrl[0],
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

      handleImageUpload(
        files,
        addProjectData?.addProject
      ).then((addProjectData) => imageHandler(addProjectData));

      // console.log('ADD PROJECT DATA', addProjectData);
      await history.push(`/project/${addProjectData?.addProject?.id}`);
    } catch (err) {
      console.log('ProjectForm.js addProject ERROR', err);
    }
  };

  /*__________________EDIT PROJECT______________________________*/
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
>>>>>>> 5ee28e61c497fa4a6f0b0c1805b358b86c4dfaa7
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
<<<<<<< HEAD
              /*value={name}*/
              name="name"
              id="name"
              placeholder="Enter project title here"
              onChange={handleChanges}
              /*ref={setTitleRef}*/
=======
              placeholder="Enter description here"
              onChange={handleChanges}
              className="description"
              maxLength="240"
>>>>>>> 5ee28e61c497fa4a6f0b0c1805b358b86c4dfaa7
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
<<<<<<< HEAD
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
            <button className="submit-button" type="submit" />
          </div>
          <div className="error">error</div>

          <div className="delete-project-button">
            <DeleteIcon />
            <p>Delete project</p>
          </div>
        </form>
      </div>
    </section>
=======
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
>>>>>>> 5ee28e61c497fa4a6f0b0c1805b358b86c4dfaa7
  );
};

export default ProjectFromBody;
