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

import '../SASS/Project.scss';
import Comments from './Comments';

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
                  <Link to={`/profile/${singleProjects.userId}/`}>
                    eriklambert
                  </Link>
                </span>
              </span>
              <span>Created At: {singleProjects.created_at}</span>
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
                <a
                  href={singleProjects.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={figmaIcon}
                    className={
                      singleProjects.figma === null
                        ? 'link-disabled'
                        : 'link-enabled'
                    }
                    alt="figma"
                  />
                </a>
              </div>
              <div className="project-header-button">
                <a
                  href={singleProjects.invision}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={invisionIcon}
                    className={
                      singleProjects.invision === null
                        ? 'link-disabled'
                        : 'link-enabled'
                    }
                    alt="invision"
                  />
                </a>
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
              <img
                src={images.source}
                alt="project-thumbnail"
                key={images.id}
              />
            ))}
          </div>

          <Comments comment={comments} activeUser={activeUser} />
        </div>
      </div>
    );
  }
}

export default Projects;
