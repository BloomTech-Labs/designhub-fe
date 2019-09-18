import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import avatar1 from '../ASSETS/avatar.jpg';
import avatar2 from '../ASSETS/avatar_2.jpg';
import avatar3 from '../ASSETS/avatar_3.jpg';
import figmaIcon from '../ASSETS/figma-icon.png';
import invisionIcon from '../ASSETS/invision-icon.png';
import DownloadIcon from './Icons/DownloadIcon';
import StarIcon from './Icons/StarIcon';
import SendIcon from './Icons/SendIcon';

import '../SASS/Project.scss';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      username: 'eriklambert',
      user_id: 1
    };
  }

  render() {
    const projects = [
      {
        project_id: 1,
        name: 'Project One',
        description:
          'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
        figma: null,
        invision: 'http://google.com',
        mainImg:
          'https://cdn.dribbble.com/users/182336/screenshots/7150621/media/b0a6aa5b2a19029479da7d91972b2774.png'
      },
      {
        project_id: 2,
        name: 'Project Two',
        description:
          'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
        figma: null,
        invision: 'http://google.com',
        mainImg:
          'https://cdn.dribbble.com/users/211151/screenshots/7147835/media/427b43495d03b59054564392c589cda4.jpg'
      },
      {
        project_id: 3,
        name: 'Project Three',
        description:
          'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
        figma: 'http://google.com',
        invision: null,
        mainImg:
          'https://cdn.dribbble.com/users/3281732/screenshots/7150760/media/a11dae58a8eee44d242417ae6a6bed3c.jpg'
      },
      {
        project_id: 4,
        name: 'Project Four',
        description:
          'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
        figma: null,
        invision: null,
        mainImg:
          'https://cdn.dribbble.com/users/674925/screenshots/7147175/media/ca03b14f14639eddf76bd01174c9f2c5.png'
      },
      {
        project_id: 5,
        name: 'Project Five',
        description:
          'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
        figma: null,
        invision: null,
        mainImg:
          'https://cdn.dribbble.com/users/1430543/screenshots/7151173/media/c6109e2cedff65261c8a5f33ce618bba.jpg'
      },
      {
        project_id: 6,
        name: 'Project Six',
        description:
          'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
        figma: null,
        invision: null,
        mainImg:
          'https://cdn.dribbble.com/users/1312159/screenshots/7148680/image.png'
      },
      {
        project_id: 7,
        name: 'Project Seven',
        description:
          'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
        figma: null,
        invision: null,
        main:
          'https://cdn.dribbble.com/users/2151039/screenshots/7148065/media/2cf88366ac2a35660345ca8226a97085.png'
      },
      {
        project_id: 8,
        name: 'Project Eight',
        description:
          'Project is a for a non-profit organization that focuses on design and user experiences and interactions.',
        figma: null,
        invision: null,
        mainImg:
          'https://cdn.dribbble.com/users/1160700/screenshots/7150660/media/610f9cc1a848c9ec6ba0121a4c569a9f.png'
      }
    ];

    const projectsArray = projects.find(
      project => `${project.project_id}` === this.state.id
    );

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

    const comments = [
      {
        user_id: 2,
        username: 'davidmoss',
        avatar:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        comment: 'Hey, I love this design! But can we tweak the hero section???'
      },
      {
        user_id: 1,
        username: 'eriklambert',
        avatar: avatar1,
        comment:
          'Yeah sure! I was wondering what I could do to it to make it different I guess. Ive been playing around with different looks and what not, what do you think?'
      },
      {
        user_id: 2,
        username: 'davidmoss',
        avatar:
          'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        comment:
          'Ya, i think maybe bring the text down a little bit and making the text maybe a tad bit smaller may help! Also, the image is a bit too much, kinda distracting away from the content, do we have another image other than that?'
      },
      {
        user_id: 3,
        username: 'kimmielong',
        avatar:
          'https://images.unsplash.com/photo-1568782517100-09bf22d88c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        comment:
          'Yea, I have more pictures saved on my hard drive I think may can work better because I agree, this one is too distracting.'
      }
    ];

    return (
      <div className="projects-container">
        <div className="project-header">
          <div className="project-details">
            <h2>{projectsArray.name}</h2>
            <h3>{projectsArray.description}</h3>
            <p>
              <span>
                Created by{' '}
                <span className="project-header-username">
                  <Link to={`/profile/${this.state.username}`}>eriklambert</Link>
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
                    projectsArray.figma === null
                      ? 'link-disabled'
                      : 'link-enabled'
                  }
                />
              </div>
              <div className="project-header-button">
                <img
                  src={invisionIcon}
                  className={
                    projectsArray.invision === null
                      ? 'link-disabled'
                      : 'link-enabled'
                  }
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
            <img src={projectsArray.mainImg} alt="main project image" />
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
                    this.state.user_id === comment.user_id
                      ? 'comment'
                      : 'comment-li-user'
                  }
                >
                  <img src={comment.avatar} alt="avatar" className="avatar" />
                  {this.state.user_id === comment.user_id ? (
                    <p className="you">You</p>
                  ) : null}
                  <p>{comment.comment}</p>
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

export default Project;
