import React, { Component } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth.js';

import ProjectForm from './ProjectForm';
import Loading from './Loading.js';

class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      projectPhotos: null
    };
  }

  componentDidMount() {
    this.fetch();
  }

  getProjectPhotos = id => {
    return axiosWithAuth()
      .get(`api/v1/photo/projects/${id}`)
      .then(res => {
        this.setState({ ...this.state, projectPhotos: res.data });
        return true;
      })
      .catch(err => console.log(err));
  };

  fetch() {
    const { id } = this.props.match.params;

    return axiosWithAuth()
      .get(`api/v1/projects/${id}`)
      .then(res => {
        this.setState({
          ...this.state,
          project: res.data[0]
        });
        this.getProjectPhotos(res.data[0].id);
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.project && this.state.projectPhotos) {
      return (
        <ProjectForm
          isEditing={true}
          project={this.state.project}
          projectPhotos={this.state.projectPhotos}
          getProjectPhotos={this.getProjectPhotos}
        />
      );
    } else {
      return <Loading />;
    }
  }
}

export default EditProject;
