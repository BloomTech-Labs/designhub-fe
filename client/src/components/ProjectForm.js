import React, { useState } from 'react';
import { useAuth0 } from '../auth-wrapper.js';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { MultiImageUpload } from './MultiImageUpload.js';
import Loader from 'react-loader-spinner';

import '../SASS/ProjectForm.scss';

const ProjectForm = props => {
  const [files, setFiles] = useState([]);
  const [projectId, setProjectId] = useState(null);
  const [disableButton, setDisableButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth0();

  const [state, setState] = useState({
    project: {
      userId: user.id,
      name: '',
      description: '',
      figma: '',
      invision: '',
      mainImg: ''
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
    addProject(state.project);
  };
  const handleImageUpload = async (file, projectId) => {
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
        data: { id }
      } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/v1/projects`,
        project
      );

      const something = await handleImageUpload(files, id);
      await props.history.push(`/project/${id}`);
      return something;
    } catch (err) {
      console.log('ProjectForm.js addProject ERROR', err);
    }
  };

  return (
    <div className="project-form-wrapper">
      <h2>Create a project</h2>
      <form
        encType="multipart/form-data"
        className="project-form-container"
        onSubmit={handleSubmit}
      >
        <div className="inner-form-container">
          <div className="project-form-left-column">
            <label htmlFor="name">Project title</label>
            <input
              type="text"
              value={name}
              name="name"
              id="name"
              placeholder="Enter project title here"
              onChange={handleChanges}
            />
            <label htmlFor="description">Project description</label>
            <input
              id="description"
              name="description"
              value={description}
              type="text"
              placeholder="Enter project description here"
              onChange={handleChanges}
            />
            <label htmlFor="teamMembers">Add team members</label>
            <input
              type="text"
              placeholder="Enter team member usernames separated by a comma"
              id="teamMembers"
            />
          </div>
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

          <div className="project-form-right-column">
            <label htmlFor="image-upload">Attach files</label>

            <MultiImageUpload filesArray={{ files, setFiles }} />

            <label htmlFor="figmaLink">Figma link</label>
            <input
              type="text"
              name="figma"
              value={figma}
              placeholder="Enter Figma link here"
              id="figmaLink"
              onChange={handleChanges}
            />
            <label htmlFor="invisionLink">Figma link</label>
            <input
              type="text"
              name="invision"
              value={invision}
              placeholder="Enter InVision link here"
              id="invisionLink"
              onChange={handleChanges}
            />
          </div>
        </div>
        <div className="form-buttons-container">
          <button
            className="submit-button"
            type="submit"
            disabled={disableButton}
          >
            Publish
          </button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(ProjectForm);
