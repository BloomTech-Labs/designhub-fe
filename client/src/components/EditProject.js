import React, { Component } from 'react';
import axios from 'axios';

import ProjectForm from './ProjectForm';

class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const { id } = this.props.match.params;

    axios
      .get(`${process.env.REACT_APP_BASE_URL}api/v1/projects/${id}`)
      .then(res => {
        this.setState({
          project: res.data[0]
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return <ProjectForm isEditing={true} project={this.state.project} />;
  }
}

export default EditProject;
