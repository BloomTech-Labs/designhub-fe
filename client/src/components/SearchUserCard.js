import React from 'react';

const SearchUserCard = ({ user }) => {
  return (
    <div className="search-user-card-container">
      <div className="user-card-avatar">
        {' '}
        <img src={user.avatar} alt="avatar" />
      </div>
      <div className="user-card-info">
        <h3>{`${user.firstName} ${user.lastName}`}</h3>
        <p>{user.username}</p>
      </div>
    </div>
  );
};

export default SearchUserCard;
