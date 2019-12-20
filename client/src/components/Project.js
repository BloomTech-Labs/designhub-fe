import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { PDFReader } from 'reactjs-pdf-reader';

import avatar1 from '../ASSETS/avatar.jpg';
import avatar2 from '../ASSETS/avatar_2.jpg';
import avatar3 from '../ASSETS/avatar_3.jpg';
import figmaIcon from '../ASSETS/figma-icon.png';
import invisionIcon from '../ASSETS/invision-icon.png';
import DownloadIcon from './Icons/DownloadIcon';
import StarIcon from './Icons/StarIcon';
import ImageViewer from './ImageViewer/ImageViewer.js';
import Loading from './Loading';
import Error401Projects from './Error401Projects';
import Error404Projects from './Error404Projects';
import caseStudyIcon from '../ASSETS/case-study.png'

import {
  getSingleProject,
  getProjectPhotos,
  getProjectComments,
  starProject,
  getStarStatus,
  unstarProject,
  getInvitesByProjectId,
  getUsersFromInvites,
  getProjectResearch
} from '../store/actions';

import '../SASS/Project.scss';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.projectId = this.props.match.params.id;
    this.state = {
      editAccess: false,
      numPages: null,
      pdfPage: 1,
      showPDF: false,
      pdfLoading: false
    }
  }

  componentDidMount() {
    this.props.getInvitesByProjectId(this.projectId)
      .then(() => {
        this.handleEditAccess();
        this.props.getUsersFromInvites(this.props.projectInvites);
      });
    this.props.getProjectResearch(this.projectId)
    this.props.getStarStatus(
      this.props.activeUser.id,
      this.props.match.params.id
    );
    this.props
      .getSingleProject(this.projectId) //gets a single project from the database
      .then(() => {
        //if there is an error skip the rest of this if/else block
        if (this.props.singleProjectError !== null) {
          console.log("single project error", this.props.singleProjectError);
          return;
        }
        else {//if there are no errors, get the project, photos, and comments
          this.props.getSingleProject(this.projectId)
            .then(() => {
              this.props.getProjectPhotos(this.projectId);
            })
            .then(() => {
              this.props.getProjectComments(this.props.match.params.id);
            });
        }
      })
  }

  onDocumentComplete = (totalPage) => {
    console.log('done loading')
    this.setState({ numPages: totalPage, pdfLoading: false });

  }

  handleChangePage = (direction) => {
    if (direction && this.state.pdfPage !== this.state.numPages) {
      this.setState({ pdfPage: this.state.pdfPage + 1 })
    }
    else if (!direction && this.state.pdfPage !== 1) {
      this.setState({ pdfPage: this.state.pdfPage - 1 })
    }
  }

  starProject = () => {
    const starObj = {
      userId: this.props.activeUser.id,
      projectId: this.projectId
    };
    this.props.starProject(starObj).then(() => {
      this.props.getStarStatus(
        this.props.activeUser.id,
        this.props.match.params.id
      );
    });
  };

  unstarProject = () => {
    const starObj = {
      id: this.props.activeUser.id
    };
    this.props.unstarProject(starObj, this.props.match.params.id).then(() => {
      this.props.getStarStatus(
        this.props.activeUser.id,
        this.props.match.params.id
      );
    });
  };

  handleEditAccess = () => {
    const userInvite = this.props.acceptedInvites.find(invite => invite.email === this.props.activeUser.email);
    if (!userInvite || userInvite.write === false) {
      this.setState({ editAccess: false });
    }
    else {
      this.setState({ editAccess: true });
    }
  }

  render() {
    const activeUser = this.props.activeUser;
    const thisProject = this.props.project;
    if (thisProject && activeUser && this.props.projectPhotos) {
      { console.log('show pdf', this.state.showPDF) }
      return (
        <div className="projects-container">
          <div className="project-header">
            <div className="project-details">
              <h2>{thisProject.name}</h2>
              <h3>{thisProject.description}</h3>
              <p>
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
                  {thisProject.privateProjects === true ? "Private" : "Public"}
                </span>
                <span className='collab-count'>
                  {this.props.acceptedInvites.length} {this.props.acceptedInvites.length === 1 ? 'Collaborator' : 'Collaborators'}
                  {this.props.acceptedInvites.length === 0 ? null :
                    <span className='collab-members'>
                      {this.props.acceptedInvites.map(invite => {
                        const user = this.props.usersFromInvites.find(user => user.id === invite.userId);
                        return (
                          <p>{!user ? null : user.firstName ? user.firstName + ' ' + user.lastName : user.email} </p>
                        )
                      })}
                    </span>
                  }
                </span>
              </p>
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
                      className='pdf-button'
                      onClick={() => this.setState({ showPDF: !this.state.showPDF, pdfLoading: true })}
                    />
                  ) : (
                      <img
                        src={caseStudyIcon}
                        alt="case study"
                        className='pdf-button-disabled'
                      />
                    )}
                </div>
                <div className="project-header-button">
                  {thisProject.figma ? (
                    <a href={thisProject.figma}>
                      <img
                        src={figmaIcon}
                        className={
                          thisProject.figma === null || thisProject.figma === ''
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
                    this.props.isStarred ? this.unstarProject : this.starProject
                  }
                  className="star project-header-button"
                >
                  <StarIcon isStarred={this.props.isStarred} />
                </div>
                {(this.props.activeUser.id === this.props.project.userId || this.state.editAccess) && (
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
          {this.state.showPDF && this.props.projectResearch.length > 0 ? (
            <div className='pdf-view'>
              {console.log('pdf view')}
              <div className='pdf-nav-buttons'>
                <button onClick={() => this.setState({ pdfPage: 1 })}>First</button>
                <button onClick={() => this.handleChangePage(false)}>Previous</button>
                <p>Page {this.state.pdfPage} of {this.state.numPages}</p>
                <button onClick={() => this.handleChangePage(true)}>Next</button>
                <button onClick={() => this.setState({ pdfPage: this.state.numPages })}>Last</button>
              </div>
              <PDFReader url={this.props.projectResearch[0].url} onDocumentComplete={this.onDocumentComplete} page={this.state.pdfPage} />
              {this.state.pdfLoading ? <Loading /> : null}
              <div className='pdf-nav-buttons'>
                <button onClick={() => this.setState({ pdfPage: 1 })}>First</button>
                <button onClick={() => this.handleChangePage(false)}>Previous</button>
                <p>Page {this.state.pdfPage} of {this.state.numPages}</p>
                <button onClick={() => this.handleChangePage(true)}>Next</button>
                <button onClick={() => this.setState({ pdfPage: this.state.numPages })}>Last</button>
              </div>
            </div>
          ) :
            (
              <div className="project-body">
                {console.log('project view')}

                {/* THIS IS THE IMAGE CAROUSEL, it manages the StickyComments and ProjectComments */}
                <ImageViewer
                  activeUser={activeUser}
                  comments={this.props.projectComments}
                  thisProject={thisProject}
                  thumbnails={this.props.projectPhotos}
                />
              </div>
            )
          }
        </div >
      );
    } else if (this.props.singleProjectError === 404) {

      return <Error404Projects />; //if the project was not found

    } else if (this.props.singleProjectError === 401) {

      return <Error401Projects />; //if the user is unauthorized to view the project
    }
    else {
      return <Loading />; //if it wasn't a 401 or 404 error, display the spinner

    }
  }
}

const mapStateToProps = state => {
  return {
    project: state.projects.singleProject,
    singleProjectError: state.projects.error, //assign 401 or 404 to singleProjectsError
    projectPhotos: state.photos.projectPhotos,
    projectComments: state.comments.projectComments,
    isStarred: state.stars.isStarred,
    acceptedInvites: state.projects.acceptedInvites,
    usersFromInvites: state.invites.usersFromInvites,
    projectInvites: state.projects.projectInvites,
    projectResearch: state.research.projectResearch
  };
};

export default connect(
  mapStateToProps,
  {
    getSingleProject,
    getProjectPhotos,
    getProjectComments,
    starProject,
    getStarStatus,
    unstarProject,
    getInvitesByProjectId,
    getUsersFromInvites,
    getProjectResearch
  }
)(Projects);
