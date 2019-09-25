import React, { useState } from 'react';
import { useAuth0 } from '../auth-wrapper.js';
import axios from 'axios';

import '../SASS/ProjectForm.scss';

const ProjectForm = () => {
  const [file, setFile] = useState(null);
  const onFileChange = event => {
    setFile(event.target.files[0]);
  };
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

  const handleSubmit = e => {
    e.preventDefault();
    addProject(state.project);
  };

  const addProject = async project => {
    try {
      const { data } = await axios.post(
        'http://localhost:8000/api/v1/projects',
        project
      );
      const projectId = data.data[0].id;
      const body = { id: projectId };
    } catch (err) {
      console.log('ProjectForm.js addProject ERROR', err);
    }

    // .then(res => {
    //   const projectId = res.data.data[0].id;
    //   const body = { id: projectId };
    //   axios
    //     .post(`http://localhost:8000/api/v1/photo/projects/signed`, body)
    //     .then(res => {
    //       console.log(res);
    //       const photoProjectBody = {
    //         projectId: projectId,
    //         url: res.data.key
    //       };
    //       const putUrl = res.data.url;
    //       axios
    //         .post(
    //           `http://localhost:8000/api/v1/photo/projects`,
    //           photoProjectBody
    //         )
    //         .then(res => {
    //           axios
    //             .put(putUrl, file)
    //             .then(res => console.log(putUrl))
    //             .catch(err => console.log('we be getting this error!'));
    //         });
    //     });
    // })
    // .catch(err => {
    //   console.log(err);
    // });
  };

  const handleImageUpload = async file => {
    console.log(file);
    try {
      const {
        data: { key, url }
      } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}api/v1/photo/projects/signed`,
        {
          id: 8000
        }
      );
      console.log(key, url);

      await axios.put(url, file, {
        headers: {
          'Content-Type': 'image/*'
        }
      });
      return `${process.env.S3_BUCKET_URL}${key}`;
    } catch (err) {
      console.log('OnboardingForm.js handleSubmit() ERROR', err);
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

          <div className="project-form-right-column">
            <label htmlFor="image-upload">Attach files</label>
            <input
              type="file"
              name="projectImage"
              id="projectImage"
              onChange={onFileChange}
            />{' '}
            <label>Included files</label>
            <p>File names will populate here</p>
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
          <button className="submit-button" type="submit">
            Publish
          </button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
