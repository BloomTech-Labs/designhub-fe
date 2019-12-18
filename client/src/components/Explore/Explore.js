import React, { Component } from 'react';
import { axiosWithAuth } from '../../utilities/axiosWithAuth.js';

import '../../SASS/Explore.scss';
import ExploreTabs from './ExploreTabs.js';

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: [],
      popular: [],
      following: [],
      myId: this.props.activeUser.id,
      userIds: [],
      users: []
    };
  }

  componentDidMount() {
    this.fetch();
  }

  componentDidUpdate() {
    if (this.state.userIds.length > 0 && this.state.users.length === 0) {
      const users = []
      this.state.userIds.forEach((id, index) => {
        if(!id) return;
        return axiosWithAuth()
          .get(`/api/v1/users/${id}`)
          .then(res => {
            users.push(res.data[0]);
            if (index + 1 === this.state.userIds.length) {
              this.setState({ users: users });
            }
          })
      })
    }
  }

  fetch() {
    const myId = this.state.myId;

    return axiosWithAuth().get(`/api/v1/explore/${myId}`)
    .then(res => {
      this.setState({
        recent: res.data.recent,
        popular: res.data.popular,
        following: res.data.following
      })
    })
    .then(() => {
      const allProjects = [...this.state.recent, ...this.state.popular, ...this.state.following];
      const userIds = [];
      allProjects.forEach(project => {
        const store = userIds.find(id => id === project.userId);
        if(!store) userIds.push(project.userId);
      })
      this.setState({
        userIds: userIds
      })
    })
    .catch(err => err);
  }

  render() {
    return (
      <div className="explore-container">
        <header>
          <h1>Explore</h1>
          <p>
            Discover projects from our talented community of Designers
          </p>
        </header>
        <ExploreTabs recent={this.state.recent} popular={this.state.popular} following={this.state.following} users={this.state.users} />
      </div>
    );
  }
}

export default Explore;
