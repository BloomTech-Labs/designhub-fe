import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import avatar1 from '../ASSETS/avatar.jpg';
import avatar2 from '../ASSETS/avatar_2.jpg';
import avatar3 from '../ASSETS/avatar_3.jpg';
import figmaIcon from '../ASSETS/figma-icon.png';
import invisionIcon from '../ASSETS/invision-icon.png';
import DownloadIcon from './Icons/DownloadIcon';
import star from '../ASSETS/star.svg';
import SendIcon from './Icons/SendIcon';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

import ImageViewer from './ImageViewer/ImageViewer.js';

import '../SASS/Project.scss';
// import Comments from './Comments';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectInfo: null,
      projectId: this.props.match.params.id,
      thumbnails: [],
      comments: [],
      myId: this.props.activeUser.id
    };
  }

  componentDidMount() {
    return axiosWithAuth()
      .get(`api/v1/projects/${this.state.projectId}`)
      .then(res => this.setState({ projectInfo: res.data[0] }))
      .then(() =>
        axiosWithAuth()
          .get(`api/v1/photo/projects/${this.state.projectId}`)
          .then(res => this.setState({ thumbnails: res.data }))
          .catch(err => console.log(err))
      )
      .then(() =>
        axiosWithAuth()
          .get(`api/v1/comments/project/${this.state.projectId}`)
          .then(res => this.setState({ comments: res.data }))
          .catch(err => console.log(err))
      )
      .catch(err => console.log(err));
  }

  starProject = () => {
    const starObj = {
      userId: this.state.myId,
      projectId: this.state.projectId
    };
    return axiosWithAuth()
      .post('api/v1/star', starObj)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.projectInfo) {
      return <h1>Loading...</h1>;
    }
    console.log('Project PROPS!!!!!!', this.props);
    const activeUser = this.props.activeUser;
    const thisProject = this.state.projectInfo;
    const comments = this.state.comments;
    console.log('Project.js ### COMMENTS', comments);
    console.log('Project.js ### projectInfo', thisProject);

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
                    to={`/profile/${thisProject.userId}/${activeUser.username}`}
                  >
                    {activeUser.username}
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
              <div className="star project-header-button">
                <img
                  src={star}
                  className="star-icon"
                  alt="star project"
                  onClick={this.starProject}
                />
              </div>
              <div
                className="edit project-header-button"
                onClick={() => {
                  this.props.history.push(
                    `/project/${this.state.projectId}/edit`
                  );
                }}
              >
                Edit
              </div>
            </div>
          </div>
        </div>

        <div className="project-body">
          {/* THIS IS THE IMAGE CAROUSEL, it manages the StickyComments and ProjectComments */}
          <ImageViewer
            activeUser={activeUser}
            comments={this.state.comments}
            thisProject={thisProject}
            thumbnails={this.state.thumbnails}
          />
        </div>
      </div>
    );
  }
}

export default Projects;
