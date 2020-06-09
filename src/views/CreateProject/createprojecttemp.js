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
                    } else if (state.deletingResearch) {
                      handleDeleteResearch(state.deletingResearch);
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
          <span className="modal--expand__background-overlay">
            {state.inviteModal && (
              <div className="invite-modal">
                <div className="close-icon-div" onClick={closeInviteModal}>
                  <div className="close-icon">Close</div>
                </div>
                <form onSubmit={handleInvites}>
                  <label htmlFor="invite-input" className="label">
                    Invite People
                  </label>
                  <div className="colab-input-wrapper">
                    {state.inviteList.map((user) => (
                      <div className="invite-chip" key={user.email}>
                        {user.firstName || user.email}
                        <div
                          className="remove-chip"
                          onClick={() => removeInviteFromList(user.id)}
                        >
                          X
                        </div>
                      </div>
                    ))}
                    <input
                      type="email"
                      className="invite-field"
                      id="invite-input"
                      onChange={handleInviteChanges}
                      name="email"
                      value={state.email}
                    />
                  </div>
                </form>

                <label htmlFor="collab-field" className="label">
                  Project Collaborators
                </label>
                <div id="collab-field" className="collab-view">
                  {
                    //map over project invites
                    loadingUsers || isDeleting ? (
                      <Loading />
                    ) : (
                      usersFromInvites.map((user) => {
                        const [projectInvite] = projectInvites.filter(
                          (invite) => invite.email === user.email
                        );
                        return projectInvite ? (
                          <ProjectInvite
                            key={user.email}
                            {...user}
                            invite={projectInvite}
                          />
                        ) : null;
                      })
                    )
                  }
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
                      value={shareLink}
                      readOnly
                    />
                  </div>
                  <div className="add-members-btn-div">
                    <button className="submit-button" onClick={sendInvites}>
                      Add Members
                    </button>
                  </div>
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
          <MultiImageUpload files={files} setFiles={setFiles} />
          {isEditing && (
            <div>
              <div className="thumbnail-container ">
                {projectPhotos.map((photo, index) => (
                  <div key={index}>
                    <img
                      alt=""
                      src={remove}
                      className="remove"
                      onClick={(e) => {
                        setState({
                          ...state,
                          deletingImage: photo.id,
                          modal: true,
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
              placeholder="Enter description here"
              onChange={handleChanges}
              className="description"
              maxLength="240"
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
              {isEditing && projectCategories[0] ? (
                <option value="" disabled selected hidden>
                  {projectCategories[0].category}
                </option>
              ) : (
                <option value="" disabled selected hidden>
                  Please Select a Category
                </option>
              )}

              {categoryNames.map((category, index) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.category}
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
            {(project && user.id === project.userId) || !project ? (
              <>
                <p className="label p-case-study">Case Study</p>
                <div className="case-study-div">
                  <div className="case-study-input-container">
                    <label
                      htmlFor="case-study"
                      className={
                        researchFile.length > 0 ||
                        (project && projectResearch.length > 0)
                          ? 'custom-case-study'
                          : 'custom-case-study case-study-grey'
                      }
                    >
                      {researchFile.length > 0 ||
                      (project && projectResearch.length > 0)
                        ? 'Case Study Uploaded'
                        : 'Upload Case Study'}
                    </label>
                    <input
                      className="case-study-input"
                      type="file"
                      accept="application/pdf"
                      id="case-study"
                      onChange={handleResearchInput}
                    />
                  </div>
                  {isEditing && projectResearch.length > 0 ? (
                    <div className="case-study-delete">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setState({
                            ...state,
                            deletingResearch: projectResearch[0].id,
                            modal: true,
                          });
                        }}
                      >
                        Delete Case Study
                      </button>
                    </div>
                  ) : (
                    <div className="case-study-delete disabled">
                      <button disabled>Delete Case Study</button>
                    </div>
                  )}
                </div>
              </>
            ) : null}
            {/*PROTOTYPE LABEL AND TEXT FIELD*/}
            {project && user.id !== project.userId ? null : (
              <>
                <label htmlFor="privacyLink" className="label">
                  Privacy
                </label>
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
              </>
            )}
            {isEditing && (
              <>
                <label htmlFor="inviteLink" className="label">
                  Collaborators
                </label>

                <div className="collab-pics">
                  {usersFromInvites.map((user) => {
                    const invite = acceptedInvites.find(
                      (invite) => invite.email === user.email
                    );
                    return !invite ? null : (
                      <div className="avatar" key={user.email}>
                        <img
                          src={user.avatar ? user.avatar : anonymous}
                          alt={
                            user.firstName
                              ? user.firstName + ' ' + user.lastName
                              : user.email
                          }
                        />
                        <span className="name">
                          {user.firstName
                            ? user.firstName + ' ' + user.lastName
                            : user.email}
                        </span>
                      </div>
                    );
                  })}
                  {user.id !== project.userId ? null : (
                    <div
                      id="inviteLink"
                      className="invite"
                      onClick={() => setState({ ...state, inviteModal: true })}
                    >
                      <div>+</div>
                    </div>
                  )}
                </div>
              </>
            )}
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
            <div className="error">{error}</div>
            {isEditing && user.id === project.userId && (
              <div
                className="delete-project-button"
                onClick={() =>
                  setState({
                    ...state,
                    modal: true,
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