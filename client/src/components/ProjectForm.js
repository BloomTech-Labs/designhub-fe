import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utilities/axiosWithAuth.js';

import {
  addProject,
  addPhoto,
  createHeatmap,
  updateProject,
  deletePhoto,
  deleteProject
} from '../store/actions';

import { MultiImageUpload } from './MultiImageUpload.js';
import Loading from './Loading';
import DeleteIcon from './Icons/DeleteIcon.js';
import remove from '../ASSETS/remove.svg';

import '../SASS/ProjectForm.scss';

const ProjectForm = ({
  isEditing,
  project,
  projectPhotos,
  history,
  getProjectPhotos,
  user,
  addProject,
  addPhoto,
  createHeatmap,
  updateProject,
  deletePhoto,
  deleteProject
}) => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [titleRef, setTitleRef] = useState(null);
  const [alert, setAlert] = useState(false);

  const [state, setState] = useState({
    project: {
      userId: user.id,
      name: isEditing ? project.name : '',
      description: isEditing ? project.description : '',
      figma: isEditing ? project.figma : '',
      invision: isEditing ? project.invision : '',
      mainImg: isEditing ? project.mainImg : ''
    },
    success: false,
    url: '',
    modal: false,
    deletingImage: null,
    projectPhotos: null
  });

  const { name, description, figma, invision } = state.project;

  const handleChanges = e => {
    setAlert(false);
    setState({
      project: {
        ...state.project,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleSubmit = async e => {
    setIsLoading(true);
    e.preventDefault();
    if (state.project.name.length === 0) {
      setIsLoading(false);
      setAlert(true);
      titleRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    } else {
      isEditing
        ? editProject(state.project, project.id)
        : createProject(state.project);
    }
  };

  const handleImageUpload = async (file, projectId, projectTitle) => {
    if (files.length > 0) {
      let requestPromises = files.map(async file => {
        try {
          const {
            data: { key, url }
          } = await axiosWithAuth().post(`api/v1/photo/projects/signed`, {
            id: projectId
          });

          await axios.put(url, file, {
            headers: {
              'Content-Type': 'image/*'
            }
          });

          const { data } = await addPhoto({
            projectId: projectId,
            url: key
          });

          await createHeatmap({
            userId: state.project.userId,
            contribution: `Posted one photo to ${projectTitle}`,
            projectId: projectId,
            imageId: data.id
          });
          const imageUrl = `${process.env.REACT_APP_S3_BUCKET_URL}${key}`;

          return imageUrl;
        } catch (err) {
          console.error('ProjectForm.js handleSubmit() ERROR', err);
        }
      });
      return await Promise.all(requestPromises).then(res => {
        return res[0];
      });
    }
  };

  const createProject = async project => {
    try {
      const {
        data: { id },
        data
      } = await addProject(project);
      const uploadedImage = await handleImageUpload(
        files,
        id,
        data.data[0].name
      );
      const newProject = {
        ...project,
        mainImg: uploadedImage
      };
      await updateProject(id, newProject);
      await history.push(`/project/${id}`);
      return uploadedImage;
    } catch (err) {
      console.log('ProjectForm.js addProject ERROR', err);
    }
  };

  const editProject = (changes, id) => {
    const updateMainImg = (changes, id) => {
      updateProject(id, changes)
        .then(res => {
          history.push(`/project/${id}`);
        })
        .catch();
    };
    handleImageUpload(files, id)
      .then(res => {
        if (res) {
          const newChanges = { ...changes, mainImg: res };
          updateMainImg(newChanges, id);
        } else {
          getProjectPhotos(id)
            .then(res => {
              if (res.data.length === 0) {
                const newChanges = { ...changes, mainImg: null };
                updateMainImg(newChanges, id);
              } else {
                const newChanges = {
                  ...changes,
                  mainImg: res.data[0].url
                };
                updateMainImg(newChanges, id);
              }
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };

  const handleDeleteProject = async id => {
    try {
      await deleteProject(id);
      await history.push(`/profile/${project.userId}/${project.username}`);
    } catch (err) {
      console.log('ProjectForm.js handleDeleteProject ERROR', err);
    }
  };

  const handleDeletePhoto = id => {
    deletePhoto(id)
      .then(res => {
        closeModal();
        getProjectPhotos(project.id);
      })
      .catch(err => console.log(err));
  };

  const closeModal = () => {
    setState({
      ...state,
      modal: false,
      deletingImage: null
    });
  };

  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };

  return (
    <div className="project-form-wrapper">
      {isLoading && <Loading />}
      <div className={state.modal ? 'modal--expand' : 'modal--close'}>
        <span
          className="modal--expand__background-overlay"
          onClick={closeModal}
        >
          {state.modal && (
            <div className="delete-project-modal">
              <p>Are you sure you want to delete that?</p>
              <div className="delete-modal-button-container">
                <button onClick={closeModal}>Cancel</button>
                <button
                  className="delete-button"
                  onClick={() => {
                    if (state.deletingImage) {
                      handleDeletePhoto(state.deletingImage);
                    } else {
                      handleDeleteProject(project.id);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </span>
      </div>
      <header className="ProjectForm__header">
        <h2 className="page-header">
          {isEditing ? 'Edit project' : 'Create a project'}
        </h2>
      </header>
      <section className="ProjectForm__body">
        <div className="left-container">
          <MultiImageUpload filesArray={{ files, setFiles }} />

          {isEditing && (
            <div>
              <div className="thumbnail-container ">
                {projectPhotos.map((photo, index) => (
                  <div key={index}>
                    <img
                      alt=""
                      src={remove}
                      className="remove"
                      onClick={e => {
                        setState({
                          ...state,
                          deletingImage: photo.id,
                          modal: true
                        });
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
              <div
                className="delete-project-button"
                onClick={() =>
                  setState({
                    ...state,
                    modal: true
                  })
                }
              >
                <DeleteIcon />
                <p>Delete project</p>
              </div>
            </div>
          )}
        </div>
        <div className="right-container">
          <form
            encType="multipart/form-data"
            className="project-form-container"
          >
            <div className={alert ? 'required alert' : 'required'}>
              <label htmlFor="name" className="label project-label">
                Project title
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
            />

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
            <label htmlFor="teamMembers" className="label">
              Add team members
            </label>
            <input
              type="text"
              placeholder="Enter team member usernames separated by a comma (optional)"
              id="teamMembers"
            />

            <div className="submit-cancel-container">
              <button
                className="submit-button"
                type="submit"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isEditing ? 'Save Changes' : 'Publish'}
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  history.goBack();
                }}
                disabled={isLoading}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default withRouter(
  connect(
    null,
    {
      addProject,
      addPhoto,
      createHeatmap,
      updateProject,
      deletePhoto,
      deleteProject
    }
  )(ProjectForm)
);
