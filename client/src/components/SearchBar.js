import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const SearchBar = ({ getSearch, history }) => {
  const [data, setData] = useState({ search: '' });

  const handleChange = name => event => {
    setData({ ...data, [name]: event.target.value });
  };

  return (
    <form
      onSubmit={event => {
        getSearch(event, data.search, history);
        setData({ ...data, search: '' });
      }}
    >
      <input
        className="search-bar-input"
        type="search"
        onChange={handleChange('search')}
        placeholder="search projects, users, teams..."
        value={data.search}
      />
    </form>
  );
};

export default withRouter(SearchBar);
