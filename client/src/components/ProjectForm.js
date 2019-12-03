import React, { useState, useRef, useEffect } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utilities/axiosWithAuth.js';

import {
  addProject,
  addPhoto,
  createHeatmap,
  updateProject,
  deletePhoto,
  deleteProject,
  getUserByEmail
} from '../store/actions';


import { MultiImageUpload } from './MultiImageUpload.js';
import Loading from './Loading';
import DeleteIcon from './Icons/DeleteIcon.js';
import remove from '../ASSETS/remove.svg';
import CharacterCount from './CharacterCount';

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
  deleteProject,
  projectInvites,
  inviteUser,
  getUserByEmail  
    
}) => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [titleRef, setTitleRef] = useState(null);
  const [error, setError] = useState('');
  const [privacy, setPrivacy] = useState(isEditing ? project.privateProjects ? "private" : "public" : 'public');

  const [state, setState] = useState({
    project: {
      userId: user.id,
      name: isEditing ? project.name : '',
      description: isEditing ? project.description : '',
      figma: isEditing ? project.figma : '',
      invision: isEditing ? project.invision : '',
      privateProjects: isEditing ? project.privateProjects : false,
      mainImg: isEditing ? project.mainImg : '',
      projectInvites: projectInvites
    },
    success: false,
    url: '',
    modal: false,
    deletingImage: null,
    inviteModal: false,
    projectPhotos: null,
    inviteList: [],
    email: '',
  });  
 
  const { name, description, figma, invision } = state.project;
  
  const handleChanges = e => {
    setError('');
    setState({
      ...state,
      project: {
        ...state.project,
        [e.target.name]: e.target.value
      }
    });
  };

  const handlePrivacySetting = e => {
    setPrivacy(e.target.value);
    const isPrivate = e.target.value === 'private' ? true : false;

    setState({
      ...state,
      project: {
        ...state.project,
        privateProjects: isPrivate
      }
    })
  }

  const handleSubmit = async e => {
    setIsLoading(true);
    e.preventDefault();

    if (state.project.name.length === 0) {
      setIsLoading(false);
      setError('Project title is required');
      titleRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    } else if (!state.project.mainImg) {
      setIsLoading(false);
      setError('Please upload at least one image');
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

  const closeInviteModal = () => {
    setState({
      ...state,
      inviteModal: false,
    })
  }

  const handleInviteChanges = e => {
    setError('');
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };

  const handleInvites = e => {
    e.preventDefault();
       
      // getUserByEmail(state.email)
      // .then( () => {
      //   setState({ ...state, inviteList: [...state.inviteList, inviteUser], email: '' });         

      // })
      
      
        axiosWithAuth()
          .get(`/api/v1/users/mail/${state.email}`)    
          .then(res => {
            setState({ ...state, inviteList: [...state.inviteList, res.data[0]], email: '' });
            console.log("response", res.data);
            console.log("email", state.email);
          })
          .catch(err => {
            console.log('err', err)
          });           
  }
  return (
    isEditing && user.id !== project.userId ? <Redirect to={`/project/${project.id}`} /> :
      <div className="project-form-wrapper">
        {console.log(state.inviteList)}
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
        <div className="project-form-wrapper">
          {isLoading && <Loading />}
          <div className={state.inviteModal ? 'modal--expand' : 'modal--close'}>
             <span
              className="modal--expand__background-overlay"> 
            {state.inviteModal && (
              <div className="invite-modal">
                <div className = "close-icon-div" onClick={closeInviteModal}> <div className = "close-icon"> x </div> </div>
                {state.inviteList.map((invite)=><p key={invite.id}>{invite.firstName}</p>)}
                <form onSubmit={handleInvites}>
                  <label htmlFor='invite-input' className='label'>Invite People</label>
                  <input type="email" className="invite-field" id="invite-input" onChange={handleInviteChanges} name="email" value={state.email} />
                </form>
                <label htmlFor="collab-field" className='label'>Project Collaborators</label>
                <div id='collab-field' className='collab-view'>
                  {//map over project invites
                  }
                  
                </div>
                <div className = "invite-modal-bottom-div"> {/*button and share link div */}

                  <div className = "share-icon-div"> <div className = "share-icon"> 🤝 </div> </div>

                  <div className = "share-link-div"> 
                    <label htmlFor="share-input" className='label'>share link</label>
                    <input type="text" id = "share-input"/> 
                  </div>

                  <div className = "add-members-btn-div"> <button className = "submit-button"> Add Members </button> </div>
                  
                </div>
                
              </div>
            )}
             </span> 
          </div>
        </div>
        <section className="ProjectForm__body">
          <div className="left-container">
            <header className="ProjectForm__header">
              <h2 className="page-header">
                {isEditing ? 'Edit project' : 'Create a project'}
              </h2>
            </header>
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
              </div>
            )}
          </div>
          <div className="right-container">
            <form
              encType="multipart/form-data"
              className="project-form-container"
            >
              <div className='required'>
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
              <label htmlFor="privacyLink" className="label">
                Privacy
            </label> {/*PROTOTYPE LABEL AND TEXT FIELD*/}
              <select
                type="select"
                name="privacy"
                value={privacy}
                placeholder="Select privacy settings"
                id="privacyLink"
                onChange={handlePrivacySetting}
              >                
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
              <label htmlFor="inviteLink" className='label'>
                Collaborators
            </label>
              <div id="inviteLink" className="invite" onClick={() => setState({ ...state, inviteModal: true })}>
                <div>+</div>
              </div>
              <p className="required-help">* Required</p>
              {/* <label htmlFor="teamMembers" className="label">
              Add team members
            </label>
            <input
              type="text"
              placeholder="Enter team member usernames separated by a comma (optional)"
              id="teamMembers"
            /> */}
              <div className="submit-cancel-container">
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
                <button
                  className="submit-button"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isEditing ? 'Save Changes' : 'Publish'}
                </button>
              </div>
              <div className='error'>
                {error}
              </div>
              {isEditing && (
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
              )}
            </form>
          </div>
        </section>
      </div>
  );
};

const mapStateToProps = state => {
  return {
    inviteUser: state.users.singleUser,
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      addProject,
      addPhoto,
      createHeatmap,
      updateProject,
      deletePhoto,
      deleteProject,
      getUserByEmail
    }
  )(ProjectForm)
);


