import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjectPhotos, getSingleProject } from '../store/actions';

import ProjectForm from './ProjectForm';
import Loading from './Loading.js';

class EditProject extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSingleProject(id);
    this.props.getProjectPhotos(id);
  }

  render() {
    console.log(this.props.project);

    if (this.props.project && this.props.projectPhotos) {
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
    projectPhotos: state.photos.projectPhotos
  };
};

export default connect(
  mapStateToProps,
  { getProjectPhotos, getSingleProject }
)(EditProject);
