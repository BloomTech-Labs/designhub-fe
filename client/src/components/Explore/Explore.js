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
      allProjects: [],
      myId: this.props.activeUser.id,
      userIds: [],
      users: []
    };
  }

  componentDidMount() {
    this.fetch();
    console.log("all projects in explore", this.state.allProjects);
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
    function getAll() {      
      return axiosWithAuth().get('/api/v1/projects/');
    }

    axios
      .all([getRecent(), getPopular(), getFollowing(), getAll()])
      .then(
        axios.spread((a, b, c, d) => {
          this.setState({
            recent: a.data.recent,
            popular: b.data.popular,
            following: c.data.following,  
            allProjects: d.data          
          })         
          
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
    })
    .catch(err => err);
  }

  render() {
    const recent = this.state.recent;
    const popular = this.state.popular;
    const following = this.state.following;  
    const allProjects = this.state.allProjects;  
    const users = this.state.users;
    return (
      <div className="explore-container">
        <header>
          <h1>Explore</h1>
          <p>
            Discover projects from our talented community of Designers
          </p>
        </header>
        <ExploreTabs recent={recent} popular={popular} following={following} users={users} allProjects = {allProjects}/>
      </div>
    );
  }
}

export default Explore;
