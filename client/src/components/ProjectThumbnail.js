import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import moment from 'moment';
import defaultImg from '../ASSETS/default_thumbnail.svg';

class ProjectThumbnail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false
    }
  }

  componentDidMount() {
    const img = new Image();
    img.onLoad = () => {
      console.log('image loaded');
      this.setState({
        loaded: true
      })
    }
    img.onerror = () => {
      this.setState({ error: true });
    }
    img.src = this.props.project.mainImg ? this.props.project.mainImg : defaultImg
  }

  render() {
    return <div className="project-content">
    <Link to={`/project/${this.props.project.id}`}>
      <>
        <div className="project-info">
          {this.props.project.name && this.props.project.name.length > 35 ? (
            <h1>{this.props.project.name.slice(0, 35)}...</h1>
          ) : (
              <h1>{this.props.project.name}</h1>
            )}
          <h1 className="created">
            {moment(this.props.project.created_at).format('MMM DD, YYYY')}
          </h1>
        </div>
        <LazyLoad>
        <img
          src={!this.state.error && this.state.loaded ? this.props.project.mainImg : defaultImg}
          className="project-thumbnail"
          alt="test"
          key={this.props.project.id}
        />
          }
        </LazyLoad>
      </>
    </Link>
  </div>
  }
}

export default ProjectThumbnail;