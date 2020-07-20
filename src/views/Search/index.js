import React, { useState } from 'react';
import Layout from '../../common/Layout';
import './styles.scss';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
import { SEARCH_MUTATION } from '../../graphql';
import Display from './Display';

export default function Search() {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const [search] = useMutation(SEARCH_MUTATION);
  const onSubmit = async (data) => {
    setLoading(true);
    const { data: searchData } = await search({
      variables: {
        searchText: data.search,
      },
    });
    console.log(searchData);
    setUsers(searchData?.search?.users);
    setProjects(searchData?.search?.projects);
    setLoading(false);
  };
  return (
    <Layout>
      <div className="searchWrapper">
        <h1>Search!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="search" ref={register} />
          <button type="submit">Submit</button>
        </form>
        <Display users={users} projects={projects} loading={loading} />
      </div>
    </Layout>
  );
}
