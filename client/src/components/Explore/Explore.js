import React, { Component } from 'react';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';
import axios from 'axios';

import '../../SASS/Explore.scss';
import ExploreTabs from './ExploreTabs.js';

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularProjects: []
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    function getPopularProjects() {
      return axiosWithAuth().get('/api/v1/projects');
    }

    return axios
      .all([getPopularProjects()])
      .then(
        axios.spread(a => {
          this.setState({
            popularProjects: a.data
          });
        })
      )
      .catch(err => err);
  }

  render() {
    const popularProjects = this.state.popularProjects;
    return (
      <div className="explore-container">
        <header>
          <h1>Explore</h1>
          <p>
            Discover projects from our talented community of UI&UX Designers,
            Illustrators, and Graphic Designers
          </p>
        </header>
        <ExploreTabs popularProjects={popularProjects} />
      </div>
    );
  }
}

export default Explore;
