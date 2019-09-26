import React, { useState } from 'react';
import { useAuth0 } from '../auth-wrapper.js';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { MultiImageUpload } from './MultiImageUpload.js';
import Loader from 'react-loader-spinner';

import '../SASS/ProjectForm.scss';

const ProjectForm = ({ isEditing, project, history }) => {
  const [files, setFiles] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    url: ''
  });

  const { name, description, figma, invision } = state.project;

  const handleChanges = e => {
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
    isEditing
      ? editProject(state.project, project.id)
      : addProject(state.project);
  };

  const handleImageUpload = async (file, projectId, projectTitle) => {
    if (files.length > 0) {
      let requestPromises = files.map(async (file, index) => {
        try {
          const {
            data: { key, url }
          } = await axios.post(
            `${process.env.REACT_APP_BASE_URL}api/v1/photo/projects/signed`,
            {
              id: projectId
            }
          );

          await axios.put(url, file, {
            headers: {
              'Content-Type': 'image/*'
            }
          });

          const { data } = await axios.post(
            `${process.env.REACT_APP_BASE_URL}api/v1/photo/projects`,
            { projectId: projectId, url: key }
          );

          await axios.post(`${process.env.REACT_APP_BASE_URL}api/v1/heatmap`, {
            userId: state.project.userId,
            contribution: `Posted one photo to ${projectTitle}`,
            projectId: projectId
          });

          return `http://my-photo-bucket-123.s3.us-east-2.amazonaws.com/${key}`;
        } catch (err) {
          console.error('ProjectForm.js handleSubmit() ERROR', err);
        }
      });
      return await Promise.all(requestPromises).then(res => {
        console.log('Promise.all RES!!!!!', res[0]);

        return res[0];
      });
    }
  };

  const addProject = async project => {
    try {
      const {
        data: { id },
        data
      } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/v1/projects`,
        project
      );

      const something = await handleImageUpload(files, id, data.data[0].name);
      const newProject = {
        ...project,
        mainImg: something
      };
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}api/v1/projects/${id}`,
        newProject
      );
      await history.push(`/project/${id}`);
      return something;
    } catch (err) {
      console.log('ProjectForm.js addProject ERROR', err);
    }
  };

  const editProject = async (changes, id) => {
    try {
      await axios.put(
        `${process.env.REACT_APP_BASE_URL}api/v1/projects/${id}`,
        changes
      );
      await handleImageUpload(files, id);
      await history.push(`/project/${id}`);
    } catch (err) {
      console.log('ProjectForm.js editProject ERROR', err);
    }
  };

  return (
    <div className="project-form-wrapper">
      <div className="left-container">
        <h2 className="page-header">
          {isEditing ? 'Edit project' : 'Create a project'}
        </h2>
        <label htmlFor="image-upload" className="label">
          {isEditing ? 'Add more files' : 'Attach files'}
        </label>

        <MultiImageUpload filesArray={{ files, setFiles }} />
      </div>
      <div className="right-container">
        <form
          encType="multipart/form-data"
          className="project-form-container"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="label">
            Project title
          </label>
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
          <label htmlFor="teamMembers" className="label">
            Add team members
          </label>
          <input
            type="text"
            placeholder="Enter team member usernames separated by a comma"
            id="teamMembers"
          />
          {isLoading && (
            <div style={{ position: 'relative' }}>
              <Loader
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  margin: '-50px 0px 0px -50px'
                }}
                type="Grid"
                color="#C0C0C0"
                height={150}
                width={150}
                timeout={3000} //3 secs
              />
            </div>
          )}

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
          <div className="submit-cancel-container">
            <button
              className="submit-button"
              type="submit"
              disabled={disableButton}
            >
              {isEditing ? 'Save Changes' : 'Publish'}
            </button>
            <button type="button" className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(ProjectForm);
