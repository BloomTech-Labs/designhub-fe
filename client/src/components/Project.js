import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import avatar1 from '../ASSETS/avatar.jpg';
import avatar2 from '../ASSETS/avatar_2.jpg';
import avatar3 from '../ASSETS/avatar_3.jpg';
import figmaIcon from '../ASSETS/figma-icon.png';
import invisionIcon from '../ASSETS/invision-icon.png';
import DownloadIcon from './Icons/DownloadIcon';
import StarIcon from './Icons/StarIcon';
import SendIcon from './Icons/SendIcon';

import '../SASS/Project.scss';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      projectInfo: [],
      projectId: this.props.match.params.id,
      comments: []
    };
  }

  componentDidMount() {
    axios
      .get(
        'https://designhubx-staging.herokuapp.com' +
          `/api/v1/projects/${this.state.projectId}`
      )
      .then(res => this.setState({ projectInfo: res.data[0] }))
      .catch(err => console.log(err));

    axios
      .get(
        'https://designhubx-staging.herokuapp.com' +
          `/api/v1/comments/project/${this.state.projectId}`
      )
      .then(res => this.setState({ comments: res.data }))
      .catch(err => console.log(err));
  }

  expand = () => {
    this.setState({
      modal: true
    });
  };

  close = () => {
    this.setState({
      modal: false
    });
  };

  render() {
    const activeUser = this.props.activeUser;
    const singleProjects = this.state.projectInfo;
    const thumbnails = [
      {
        source:
          'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
      },
      {
        source:
          'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
      },
      {
        source:
          'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
      },
      {
        source:
          'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
      },
      {
        source:
          'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
      },
      {
        source:
          'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
      }
    ];

    const comments = this.state.comments;
    return (
      <div className="projects-container">
        <div className="project-header">
          <div className="project-details">
            <h2>{singleProjects.name}</h2>
            <h3>{singleProjects.description}</h3>
            <p>
              <span>
                Created by{' '}
                <span className="project-header-username">
                  <Link to={`/profile/`}>eriklambert</Link>
                </span>
              </span>
              <span>Created on June 11, 2020</span>
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
                <img
                  src={figmaIcon}
                  className={
                    singleProjects.figma === null
                      ? 'link-disabled'
                      : 'link-enabled'
                  }
                  alt="figma"
                />
              </div>
              <div className="project-header-button">
                <img
                  src={invisionIcon}
                  className={
                    singleProjects.invision === null
                      ? 'link-disabled'
                      : 'link-enabled'
                  }
                  alt="invision"
                />
              </div>
              <div className="download project-header-button">
                <DownloadIcon />
              </div>
              <div className="star project-header-button">
                <StarIcon />
              </div>
              <div className="edit project-header-button">Edit</div>
            </div>
          </div>
        </div>
        <div className="project-body">
          <div className="project-main-image">
            <img
              src={singleProjects.mainImg}
              alt="main project"
              onClick={this.expand}
            />
          </div>
          <div
            className={
              this.state.modal === true ? 'modal-expand' : 'modal-close'
            }
          >
            <img src={singleProjects.mainImg} alt="main project" />
            <span className="background-overlay" onClick={this.close} />
          </div>
          <div className="project-thumbnails">
            {thumbnails.map(images => (
              <img src={images.source} alt="project-thumbnail" />
            ))}
          </div>
          <div className="project-comments">
            <div className="comments-header">Comments</div>
            <div className="comments-body">
              {comments.map(comment => (
                <div
                  className={
                    activeUser.id === comment.id ? 'comment' : 'comment-li-user'
                  }
                >
                  <img src={comment.avatar} alt="avatar" className="avatar" />
                  {activeUser.id === comment.user_id ? (
                    <p className="you">You</p>
                  ) : null}
                  <p className="message">{comment.text}</p>
                </div>
              ))}
            </div>
            <div className="comments-form">
              <form>
                <div className="form-wrapper">
                  <input type="text" placeholder="Leave a comment..." />
                  <button>
                    <SendIcon />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
