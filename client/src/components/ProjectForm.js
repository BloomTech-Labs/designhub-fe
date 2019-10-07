import React, { useState, useEffect } from 'react';
import { useAuth0 } from '../auth-wrapper.js';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { axiosWithAuth } from '../utilities/axiosWithAuth.js';
import errorIcon from '../ASSETS/error-icon.svg';
import { MultiImageUpload } from './MultiImageUpload.js';
import Loading from './Loading';

import '../SASS/ProjectForm.scss';
import DeleteIcon from './Icons/DeleteIcon.js';
import remove from '../ASSETS/remove.svg';

const ProjectForm = ({
  isEditing,
  project,
  projectPhotos,
  history,
  getProjectPhotos
}) => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  const { user } = useAuth0();

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
    setState({
      project: {
        ...state.project,
        [e.target.name]: e.target.value
      }
    });
    setAlert(false);
  };

  const handleSubmit = async e => {
    setIsLoading(true);
    e.preventDefault();
    if (state.project.name.length === 0) {
      setIsLoading(false);
      setAlert(true);
      return;
    } else {
      isEditing
        ? editProject(state.project, project.id)
        : addProject(state.project);
    }
  };

  const handleImageUpload = async (file, projectId, projectTitle) => {
    if (files.length > 0) {
      let requestPromises = files.map(async (file, index) => {
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

          const { data } = await axiosWithAuth().post(`api/v1/photo/projects`, {
            projectId: projectId,
            url: key
          });

          await axiosWithAuth().post(`api/v1/heatmap`, {
            userId: state.project.userId,
            contribution: `Posted one photo to ${projectTitle}`,
            projectId: projectId,
            imageId: data.id
          });

          return `http://my-photo-bucket-123.s3.us-east-2.amazonaws.com/${key}`;
        } catch (err) {
          console.error('ProjectForm.js handleSubmit() ERROR', err);
        }
      });
      return await Promise.all(requestPromises).then(res => {
        return res[0];
      });
    }
  };

  const addProject = async project => {
    try {
      const {
        data: { id },
        data
      } = await axiosWithAuth().post(`api/v1/projects`, project);
      const something = await handleImageUpload(files, id, data.data[0].name);
      const newProject = {
        ...project,
        mainImg: something
      };
      await axiosWithAuth().put(`api/v1/projects/${id}`, newProject);
      await history.push(`/project/${id}`);
      return something;
    } catch (err) {
      console.log('ProjectForm.js addProject ERROR', err);
    }
  };

  const editProject = (changes, id) => {
    handleImageUpload(files, id)
      .then(res => {
        if (res) {
          const newChanges = { ...changes, mainImg: res };
          return axiosWithAuth()
            .put(`api/v1/projects/${id}`, newChanges)
            .then(res => {
              history.push(`/project/${id}`);
            })
            .catch();
        } else {
          return axiosWithAuth()
            .get(`/api/v1/photo/projects/${id}`)
            .then(res => {
              if (res.data.length === 0) {
                const newChanges = { ...changes, mainImg: null };
                return axiosWithAuth()
                  .put(`api/v1/projects/${id}`, newChanges)
                  .then(res => {
                    history.push(`/project/${id}`);
                  })
                  .catch();
              } else {
                const newChanges = {
                  ...changes,
                  mainImg: res.data[0].url
                };
                return axiosWithAuth()
                  .put(`api/v1/projects/${id}`, newChanges)
                  .then(res => {
                    history.push(`/project/${id}`);
                  })
                  .catch(err => console.log(err));
              }
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };

  const deleteProject = async id => {
    try {
      await axiosWithAuth().delete(`api/v1/projects/${id}`);
      await history.push(`/profile/${project.userId}/${project.username}`);
    } catch (err) {
      console.log('ProjectForm.js deleteProject ERROR', err);
    }
  };

  const deletePhoto = id => {
    return axiosWithAuth()
      .delete(`api/v1/photo/projects/${id}`)
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
                      deletePhoto(state.deletingImage);
                    } else {
                      deleteProject(project.id);
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
          {/* <label htmlFor="image-upload" className="label">
          {isEditing ? 'Add more files' : 'Attach files'}
        </label> */}

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
                      /* onClick={() => deletePhoto(photo.id)} */
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
            className={`${alert ? 'alert' : null} project-form-container`}
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="label project-label">
              Project title{alert && ' (required)'}
            </label>
            <div className="alert-container">
              <img alt="error icon" className="errorIcon" src={errorIcon} />
            </div>
            <input
              type="text"
              value={name}
              name="name"
              id="name"
              placeholder="Enter project title here"
              onChange={handleChanges}
            />
            <label htmlFor="description" className="label">
              Project description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              type="text"
              placeholder="Enter project description here"
              onChange={handleChanges}
              className="description"
            />

            <label htmlFor="figmaLink" className="label">
              Figma link
            </label>
            <input
              type="text"
              name="figma"
              value={figma}
              placeholder="Enter Figma link here"
              id="figmaLink"
              onChange={handleChanges}
            />
            <label htmlFor="invisionLink" className="label">
              InVision link
            </label>
            <input
              type="text"
              name="invision"
              value={invision}
              placeholder="Enter InVision link here"
              id="invisionLink"
              onChange={handleChanges}
            />
            <label htmlFor="teamMembers" className="label">
              Add team members
            </label>
            <input
              type="text"
              placeholder="Enter team member usernames separated by a comma"
              id="teamMembers"
            />

            <div className="submit-cancel-container">
              <button
                className="submit-button"
                type="submit"
                style={isLoading ? { display: 'none' } : null}
              >
                {isEditing ? 'Save Changes' : 'Publish'}
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  history.goBack();
                }}
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

export default withRouter(ProjectForm);
