import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjectPhotos, getSingleProject } from '../store/actions';

import ProjectForm from './ProjectForm';
import Loading from './Loading.js';

import Error401Projects from './Error401Projects';
import Error404Projects from './Error404Projects';

class EditProject extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSingleProject(id);
    this.props.getProjectPhotos(id);
  }

  render() {
    if(this.props.singleProjectError === 404) {
      return <Error404Projects />
    } else if (this.props.singleProjectError === 401) {
      return <Error401Projects />
    } 
    else if (this.props.project && this.props.projectPhotos) {
      return (
        <ProjectForm
          user={this.props.activeUser}
          isEditing={true}
          project={this.props.project}
          projectPhotos={this.props.projectPhotos}
          getProjectPhotos={this.props.getProjectPhotos}
        />
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
    singleProjectError: state.projects.error
  };
};

export default connect(
  mapStateToProps,
  { getProjectPhotos, getSingleProject }
)(EditProject);
