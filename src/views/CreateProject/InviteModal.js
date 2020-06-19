import React from 'react';
import './styles.scss';
import './SASS/InviteModal.scss'

const InviteModal = () => {
  return (
    <div className="modal--close">
      <span className="modal--expand__background-overlay">
        <div className="invite-modal">
          <div className="close-icon-div">
            <div className="close-icon">Close</div>
          </div>
          <form>
            <label htmlFor="invite-input" className="label">
              Invite People
            </label>
            <div className="colab-input-wrapper">
              <div className="invite-chip">
                <div className="remove-chip">X</div>
              </div>
              <input
                type="email"
                className="invite-field"
                id="invite-input"
                name="email"
              />
            </div>
          </form>

          <label htmlFor="collab-field" className="label">
            Project Collaborators
          </label>
          <div id="collab-field" className="collab-view">
            {/*<ProjectInvite />*/}
          </div>
          <div className="invite-modal-bottom-div">
            {/*button and share link div */}
            {/* <div className="share-icon-div">
                        <div
                          className="share-icon"
                          onClick={() => {
                            const link = document.getElementById('share-input');
                            link.select();
                            link.setSelectionRange(0, 99999);
                            document.execCommand('copy');
                          }}
                        >
                          <span role="img" aria-label="Copy">
                            🤝
                      </span>
                        </div>
                      </div> */}
            <div className="share-link-div">
              <label htmlFor="share-input" className="label">
                share link
              </label>
              <input
                type="text"
                id="share-input"
                /*value={shareLink}*/
                readOnly
              />
            </div>
            <div className="add-members-btn-div">
              <button className="submit-button">Add Members</button>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default InviteModal;