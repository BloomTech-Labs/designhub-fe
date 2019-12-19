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
      this.state.userIds.map((id, index) => {
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
    function getRecent() {
      return axiosWithAuth().get(`/api/v1/explore/${myId}`);
    }
    function getPopular() {
      return axiosWithAuth().get(`/api/v1/explore/${myId}`);
    }
    function getFollowing() {
      return axiosWithAuth().get(`/api/v1/explore/${myId}`);
    }    

    axios
      .all([getRecent(), getPopular(), getFollowing()])
      .then(
        axios.spread((a, b, c, d) => {
          this.setState({
            recent: a.data.recent,
            popular: b.data.popular,
            following: c.data.following            
          });
        })
      )
      .then(() => {
        const allProjects = [...this.state.recent, ...this.state.popular, ...this.state.following];
        const userIds = [];
        allProjects.map(project => {
          const store = userIds.find(id => id === project.userId);
          return !store ? userIds.push(project.userId) : null
        })
        this.setState({
          userIds: userIds
        })
      })
      .catch(err => err);
  }

  render() {
    const recent = this.state.recent;
    const popular = this.state.popular;
    const following = this.state.following;    
    const users = this.state.users;
    return (
      <div className="explore-container">
        <header>
          <h1>Explore</h1>
          <p>
            Discover projects from our talented community Designers
          </p>
        </header>
        <ExploreTabs recent={recent} popular={popular} following={following} users={users}/>
      </div>
    );
  }
}

export default Explore;
