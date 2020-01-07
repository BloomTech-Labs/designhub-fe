import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';

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

import {
  getSingleProject,
  getProjectPhotos,
  getProjectComments,
  starProject,
  getStarStatus,
  unstarProject,
  getInvitesByProjectId,
  getUsersFromInvites,
  getCategoriesByProjectId
} from '../store/actions';

import '../SASS/Project.scss';

class Project extends Component {
  constructor(props) {
    super(props);
    this.projectId = this.props.match.params.id;
    this.state = {
      editAccess: false,
    }
  }

  componentDidMount() {
    this.props.getInvitesByProjectId(this.projectId)
      .then(() => {
        this.handleEditAccess();
        this.props.getUsersFromInvites(this.props.projectInvites);
      });
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
            })
            .then(() => {
              this.props.getCategoriesByProjectId(this.projectId)
            })

        }
      })
    
    
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
    console.log(userInvite);
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
    if (this.props.singleProjectError === 404) {

      return <Error404Projects />; //if the project was not found

    } else if (this.props.singleProjectError === 401) {

      return <Error401Projects />; //if the user is unauthorized to view the project
    } else if (thisProject && activeUser && this.props.projectPhotos) {
      return (
        <div className="projects-container">
          <div className="project-header">
            <div className="project-details">
              <h2>{thisProject.name}</h2>
              <h3>{thisProject.description}</h3>
              <div className='subtitle'>
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
                          <p key={invite.id}>{!user ? null : user.firstName ? user.firstName + ' ' + user.lastName : user.email} </p>
                        )
                      })}
                    </span>
                  }
                </span> 
                {/*project category*/}
                <span> 
                  {!this.props.projectCategories[0] ? null: this.props.projectCategories[0].category}                  
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

          <div className="project-body">
            {/* THIS IS THE IMAGE CAROUSEL, it manages the StickyComments and ProjectComments */}

            <ImageViewer
              activeUser={activeUser}
              comments={this.props.projectComments}
              thisProject={thisProject}
              thumbnails={this.props.projectPhotos}
            />
          </div>
        </div>
      );
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
    projectCategories: state.categories.projectCategories
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
    getCategoriesByProjectId
  }
)(Project);
