import React, { Component } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth.js';

import ProjectForm from './ProjectForm';

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

  fetch() {
    const { id } = this.props.match.params;

    return axiosWithAuth()
      .get(`api/v1/projects/${id}`)
      .then(res => {
        this.setState({
          ...this.state,
          project: res.data[0]
        });
        return axiosWithAuth()
          .get(`api/v1/photo/projects/${res.data[0].id}`)
          .then(res => {
            this.setState({ ...this.state, projectPhotos: res.data });
          })
          .catch(err => console.log(err));
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
        />
      );
    } else {
      return <h2>Loading...</h2>;
    }
  }
}

export default EditProject;
