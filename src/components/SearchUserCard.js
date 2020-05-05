import React from 'react';
import { Link } from 'react-router-dom';

const SearchUserCard = ({ user }) => {
  return (
    <div className="search-user-card-container">
      <Link to={`/profile/${user.id}/${user.username}`}>
        <div className="user-card-avatar">
          {' '}
          <img src={user.avatar} alt="avatar" />
        </div>
      </Link>
      <Link to={`/profile/${user.id}/${user.username}`}>
        <div className="user-card-info">
          <h3>{`${user.firstName} ${user.lastName}`}</h3>
          <p>@{user.username}</p>
        </div>
      </Link>
    </div>
  );
};

export default SearchUserCard;
