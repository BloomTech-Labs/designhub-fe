<div className="project-form-wrapper">
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
  <div className="project-form-wrapper">
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
            <ProjectInvite />
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
  </div>
  <section className="ProjectForm__body">
    <div className="left-container">
      <header className="ProjectForm__header">
        <h2 className="page-header"></h2>
      </header>
      <MultiImageUpload /*files={files} setFiles={setFiles} */ />

      <div>
        <div className="thumbnail-container ">
          <div key={index}>
            <img
              alt=""
              /*src={remove}*/
              className="remove"
            />
            <div className="thumb" key={index}>
              <div style={thumbInner}>
                <img
                  alt="project thumbnail"
                  /*src={photo.url}*/
                  className="thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="right-container">
      <form encType="multipart/form-data" className="project-form-container">
        <div className="required">
          <label htmlFor="name" className="label project-label">
            Project title *
          </label>
          <input
            required
            autoFocus={true}
            type="text"
            /*value={name}*/
            name="name"
            id="name"
            placeholder="Enter project title here"
            /*onChange={handleChanges}*/
            /*ref={setTitleRef}*/
          />
        </div>
        <label htmlFor="description" className="label">
          Project description
        </label>
        <textarea
          id="description"
          name="description"
          /*value={description}*/
          type="text"
          placeholder="Enter description here"
          /*onChange={handleChanges}*/
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
          /*onChange={categoryHandler}*/
          className="category-select"
        >
          {/*if editing a project and a category was previously selected for the project
                   display that category as the default selection. if not, dispay the defaut option */}
          {/*            <option value="" disabled selected hidden>
              {projectCategories[0].category}
            </option>*/}
          {/*):(*/}
          <option value="" disabled selected hidden>
            Please Select a Category
          </option>
          <option /*key={category.id} value={category.id}*/>
            category.category
          </option>
          );
        </select>

        <label htmlFor="figmaLink" className="label">
          Figma
        </label>
        <input
          type="text"
          name="figma"
          /*value={figma}*/
          placeholder="Enter link here (optional)"
          id="figmaLink"
          /*onChange={handleChanges}*/
        />
        <label htmlFor="invisionLink" className="label">
          Prototype
        </label>
        <input
          type="text"
          name="invision"
          /*value={invision}*/
          placeholder="Enter link here (optional)"
          id="invisionLink"
          /*onChange={handleChanges}*/
        />

        <CaseStudy />
        <Privacy />
        <Editing />
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
          ></button>
        </div>
        <div className="error">{error}</div>

        <div className="delete-project-button">
          <DeleteIcon />
          <p>Delete project</p>
        </div>
      </form>
    </div>
  </section>
</div>;