import React from 'react';
import './styles.scss';
import './SASS/DeleteProjectModal.scss';
import { useMutation, useQuery } from '@apollo/react-hooks';
import {
  DELETE_PROJECT_PHOTO_MUTATION,
  DELETE_PROJECT_MUTATION,
  GET_PROJECT_BY_ID_QUERY,
} from '../../graphql/index';

const DeleteProjectModal = ({ history, project, closeModal, deletingImage }) => {
  const { data: getProjectPhotos } = useQuery(GET_PROJECT_BY_ID_QUERY, {
    variables: { id: project?.id },
  });
  const [deleteProjectPhoto] = useMutation(DELETE_PROJECT_PHOTO_MUTATION);

  const handleDeletePhoto = (id) => {
    deleteProjectPhoto(id)
      .then((res) => {
        closeModal();
        getProjectPhotos(project.id);
      })
      .catch((err) => console.log(err));
  };

  const [deleteProject] = useMutation(DELETE_PROJECT_MUTATION);

  const handleDeleteProject = async (id) => {
    try {
      await deleteProject(id);
      await history.push(`/profile/${project.username}`);
    } catch (err) {
      console.log('ProjectForm.js handleDeleteProject ERROR', err);
    }
  };

  return (
    <div className="modal--close">
      <span className="modal--expand__background-overlay">
        <div className="delete-project-modal">
          <p>Are you sure you want to delete that?</p>
          <div className="delete-modal-button-container">
            <button onClick={closeModal}>Cancel</button>
            <button
              className="delete-button"
              onClick={() => {
                if (deletingImage) {
                  handleDeletePhoto(deletingImage);
                  //} else if (state.deletingResearch) {
                  //handleDeleteResearch(state.deletingResearch);
                } else {
                  handleDeleteProject(project.id);
                }
              }}
            >
              Delete
            </button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      </span>
    </div>
  );
};

export default DeleteProjectModal;
