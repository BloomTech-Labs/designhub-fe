import React, { Component } from 'react';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';
import axios from 'axios';

import '../../SASS/Explore.scss';
import ExploreTabs from './ExploreTabs.js';

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: [],
      popular: [],
      following: [],
      myId: this.props.activeUser.id
    };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const myId = this.state.myId;

    return axios
      .get(`/api/v1/explore/${myId}`)
      .then(res => {
        this.setState({
          recent: res.data.recent,
          popular: res.data.popular,
          following: res.data.following
        })
      })
      .catch(err => err);
  }

  render() {
    const recent = this.state.recent;
    const popular = this.state.popular;
    const following = this.state.following;
    return (
      <div className="explore-container">
        <header>
          <h1>Explore</h1>
          <p>
            Discover projects from our talented community Designers
          </p>
        </header>
        <ExploreTabs recent={recent} popular={popular} following={following} />
      </div>
    );
  }
}

export default Explore;
