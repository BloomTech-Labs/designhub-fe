import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
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

import {
  getSingleProject,
  getProjectPhotos,
  getProjectComments,
  starProject,
  getStarStatus,
  unstarProject
} from '../store/actions';

import '../SASS/Project.scss';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.projectId = this.props.match.params.id;
  }

  componentDidMount() {
    this.props.getStarStatus(
      this.props.activeUser.id,
      this.props.match.params.id
    );
    this.props
      .getSingleProject(this.projectId)
      .then(() => {
        this.props.getProjectPhotos(this.projectId);
      })
      .then(() => {
        this.props.getProjectComments(this.props.match.params.id);
      });
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

  render() {
    const activeUser = this.props.activeUser;
    const thisProject = this.props.project;
    if (thisProject && activeUser && this.props.projectPhotos) {
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
                {this.props.activeUser.id === this.props.project.userId && (
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
    } else {
      return <Loading />;
    }
  }
}

const mapStateToProps = state => {
  return {
    project: state.projects.singleProject,
    projectPhotos: state.photos.projectPhotos,
    projectComments: state.comments.projectComments,
    isStarred: state.stars.isStarred
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
    unstarProject
  }
)(Projects);
