const activeUser = this.props.activeUser;
    const thisProject = this.props.project;
    if (this.props.singleProjectError === 404) {
      return <Error404Projects />; //if the project was not found
    } else if (this.props.singleProjectError === 401) {
      return <Error401Projects />; //if the user is unauthorized to view the project
    } else if (thisProject && activeUser && this.props.projectPhotos) {
      return (
        <div className="projects-container">
          <div className="project-header">
            <div className="project-header-alignment">
              <div className="project-details">
                <h2>{thisProject.name}</h2>
                <h3>{thisProject.description}</h3>
                <div className="subtitle">
                  <span>
                    Created by{' '}
                    <span className="project-header-username">
                      <Link
                        to={`/profile/${thisProject.userId}/${thisProject.username}`}
                      >
                        {thisProject.username}
                      </Link>
                    </span>
                  </span>
                  <span>
                    Created on{' '}
                    {moment(thisProject.created_at).format('MMM DD, YYYY')}
                  </span>
                  <span>
                    {thisProject.privateProjects === true
                      ? 'Private'
                      : 'Public'}
                  </span>
                  <span className="collab-count">
                    {this.props.acceptedInvites.length}{' '}
                    {this.props.acceptedInvites.length === 1
                      ? 'Collaborator'
                      : 'Collaborators'}
                    {this.props.acceptedInvites.length === 0 ? null : (
                      <span className="collab-members">
                        {this.props.acceptedInvites.map((invite) => {
                          const user = this.props.usersFromInvites.find(
                            (user) => user.id === invite.userId
                          );
                          return (
                            <p key={invite.id}>
                              {!user
                                ? null
                                : user.firstName
                                ? user.firstName + ' ' + user.lastName
                                : user.email}{' '}
                            </p>
                          );
                        })}
                      </span>
                    )}
                  </span>
                  {/*project category*/}
                  <span>
                    {!this.props.projectCategories[0]
                      ? null
                      : this.props.projectCategories[0].category}
                  </span>
                </div>
              </div>
              <div className="project-header-right">
                <div className="project-header-team">
                  <img src={avatar1} alt="user avatar" />
                  <img src={avatar2} alt="user avatar" />
                  <img src={avatar3} alt="user avatar" />
                </div>
                <div className="project-header-links">
                  <div className="project-header-button">
                    {this.props.projectResearch[0] ? (
                      <img
                        src={caseStudyIcon}
                        alt="case study"
                        className="pdf-button"
                        onClick={() =>
                          this.setState({
                            showPDF: !this.state.showPDF,
                            pdfLoading: true,
                          })
                        }
                      />
                    ) : (
                      <img
                        src={caseStudyIcon}
                        alt="case study"
                        className="pdf-button-disabled"
                      />
                    )}
                  </div>
                  <div className="project-header-button">
                    {thisProject.figma ? (
                      <a href={thisProject.figma}>
                        <img
                          src={figmaIcon}
                          className={
                            thisProject.figma === null ||
                            thisProject.figma === ''
                              ? 'link-disabled'
                              : 'link-enabled'
                          }
                          alt="figma"
                        />
                      </a>
                    ) : (
                      <img
                        src={figmaIcon}
                        className={
                          thisProject.figma === null || thisProject.figma === ''
                            ? 'link-disabled'
                            : 'link-enabled'
                        }
                        alt="figma"
                      />
                    )}
                  </div>
                  <div className="project-header-button">
                    {thisProject.invision ? (
                      <a href={thisProject.invision}>
                        <img
                          src={invisionIcon}
                          className={
                            thisProject.invision === '' ||
                            thisProject.invision === null
                              ? 'link-disabled'
                              : 'link-enabled'
                          }
                          alt="invision"
                        />
                      </a>
                    ) : (
                      <img
                        src={invisionIcon}
                        className={
                          thisProject.invision === '' ||
                          thisProject.invision === null
                            ? 'link-disabled'
                            : 'link-enabled'
                        }
                        alt="invision"
                      />
                    )}
                  </div>
                  <div className="download project-header-button">
                    <DownloadIcon />
                  </div>
                  <div
                    onClick={
                      this.props.isStarred
                        ? this.unstarProject
                        : this.starProject
                    }
                    className="star project-header-button"
                  >
                    <StarIcon isStarred={this.props.isStarred} />
                  </div>
                  {(this.props.activeUser.id === this.props.project.userId ||
                    this.state.editAccess) && (
                    <div
                      className="edit project-header-button"
                      onClick={() => {
                        this.props.history.push(
                          `/project/${this.projectId}/edit`
                        );
                      }}
                    >
                      Edit
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {this.state.showPDF && this.props.projectResearch.length > 0 ? (
            <div className="pdf-view">
              <div className="pdf-nav-buttons">
                <button onClick={() => this.setState({ pdfPage: 1 })}>
                  First
                </button>
                <button onClick={() => this.handleChangePage(false)}>
                  Previous
                </button>
                <p>
                  Page {this.state.pdfPage} of {this.state.numPages}
                </p>
                <button onClick={() => this.handleChangePage(true)}>
                  Next
                </button>
                <button
                  onClick={() =>
                    this.setState({ pdfPage: this.state.numPages })
                  }
                >
                  Last
                </button>
              </div>
              <PDFReader
                url={this.props.projectResearch[0].url}
                onDocumentComplete={this.onDocumentComplete}
                page={this.state.pdfPage}
              />
              {this.state.pdfLoading ? <Loading /> : null}
              <div className="pdf-nav-buttons">
                <button onClick={() => this.setState({ pdfPage: 1 })}>
                  First
                </button>
                <button onClick={() => this.handleChangePage(false)}>
                  Previous
                </button>
                <p>
                  Page {this.state.pdfPage} of {this.state.numPages}
                </p>
                <button onClick={() => this.handleChangePage(true)}>
                  Next
                </button>
                <button
                  onClick={() =>
                    this.setState({ pdfPage: this.state.numPages })
                  }
                >
                  Last
                </button>
              </div>
            </div>
          ) : (
            <div className="project-body">
              {/* THIS IS THE IMAGE CAROUSEL, it manages the StickyComments and ProjectComments */}
              <ImageViewer
                activeUser={activeUser}
                comments={this.props.projectComments}
                thisProject={thisProject}
                thumbnails={this.props.projectPhotos}
              />
            </div>
          )}
        </div>
      );
    } else {
      return <Loading />; //if it wasn't a 401 or 404 error, display the spinner
    }
  }
}