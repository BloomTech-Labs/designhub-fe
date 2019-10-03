import React, { Component } from 'react';

class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  displayUsers = () => {
    this.props.users.map((user, index) => {
      return (
        <div key={index}>
          <h3>{user.username}</h3>
          <p>{user.email}</p>
          <img src={user.avatar} alt="avatar" />
          <p>{user.bio}</p>
        </div>
      );
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2> HHHHHHHHEEEEEEEY</h2>
        <h2> HHHHHHHHEEEEEEEY</h2>
        <h2> HHHHHHHHEEEEEEEY</h2>
        <h2> HHHHHHHHEEEEEEEY</h2>
        <h2> HHHHHHHHEEEEEEEY</h2>
        <h2> HHHHHHHHEEEEEEEY</h2>
        <h2> HHHHHHHHEEEEEEEY</h2>
      </div>
    );
  }
}

export default SearchPage;
