import React from 'react';
import './styles.scss';
import './SASS/DeleteProjectModal.scss';

const DeleteProjectModal = () => {
  return (
    <div className="modal--close">
      <span className="modal--expand__background-overlay">
        <div className="delete-project-modal">
          <p>Are you sure you want to delete that?</p>
          <div className="delete-modal-button-container">
            <button>Cancel</button>
            <button className="delete-button">Delete</button>
          </div>
        </div>
      </span>
    </div>
  );
};

export default DeleteProjectModal;