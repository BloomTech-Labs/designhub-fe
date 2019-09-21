// ========== DEPENDENCIES ========== //
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../utilities/axiosWithAuth.js';
import axios from 'axios';
// ========== IMPORTED COMPONENTS ========== //
import UserProfileTabs from './UserProfile_Tabs';
// ========== STYLES ========== //
import '../SASS/UserProfile.scss';

class UserProfile_LI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: [],
      following: [],
      userId: this.props.match.params.id,
      userData: []
    };
  }

  // API CALL FUNCTIONS TO RECEIVE USER'S PROFILE DATA

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    console.log('feeeetch',this.props.match.params.id)
    const userId = this.state.userId;
    console.log('under fetch ', userId)

    function getUserData(id) {
      return axiosWithAuth().get(`/api/v1/users/${id}`);
    }
    function getFollowingCount(id) {
      return axiosWithAuth().get(`/api/v1/followers/count/following/${id}`);
    }
    function getFollowerCount(id) {
      return axiosWithAuth().get(`/api/v1/followers/count/followers/${id}`);
    }

    return axios
      .all([getUserData(this.props.match.params.id), getFollowingCount(this.props.match.params.id), getFollowerCount(this.props.match.params.id)])
      .then(
        axios.spread((a, b, c) => {
          this.setState({
            userData: a.data[0],
            following: b.data[0].count,
            followers: c.data[0].count
          });
        })
      )
      .catch(err => err);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('Prevstate: ', prevState)
    // console.log(this.state.userId )
    //   console.log( prevState.userId)
    if (this.props.match.params.id !== prevProps.match.params.id) {
      console.log('helo')
      this.fetch()
    }
  }
  
  render() {
    const userData = this.state.userData;
    window.scroll(0, 0);
    return (
      <div className="user-profile-container">
        <div className="user-header">
          <img src={userData.avatar} className="avatar" alt="avatar" />
          <div className="user-info">
            <h1 className="userFLname">
              {userData.firstName} {userData.lastName}
            </h1>
            <h2 className="username">{userData.username}</h2>
            <p className="bio">{userData.bio}</p>
            <div className="user-info-location-website">
              <p>{userData.location}</p>
              <a
                href={userData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="website"
              >
                {userData.website}
              </a>
            </div>
          </div>
          <div className="user-data-container">
            <div className="user-data">
              <div className="count-flex">
                <h6>Projects</h6>
                <p>12</p>
              </div>
              <div className="count-flex">
                <h6>Followers</h6>
                <p>{this.state.followers}</p>
              </div>
              <div className="count-flex">
                <h6>Following</h6>
                <p>{this.state.following}</p>
              </div>
              <div className="count-flex">
                <h6>Starred</h6>
                <p>143</p>
              </div>
            </div>
            <div className="teams-container">
              <div className="teams">
                {/* <h6>Teams</h6>
                {teams.teams.map(team => (
                  <img
                    key={team.avatar}
                    src={team.avatar}
                    className="team-avatar"
                    alt="team avatars"
                  />
                ))} */}
              </div>
              <div>
                <Link to="/settings">
                  <button className="edit-profile-btn">Edit Profile</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <UserProfileTabs />
      </div>
    );
  }
}

export default UserProfile_LI;
