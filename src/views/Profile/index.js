import React from 'react';
import Layout from '../../common/Layout';
import { useParams } from 'react-router-dom';
import './styles.scss';

export default function Profile() {
  const { username } = useParams();
  return (
    <Layout>
      <h1>Profile!</h1>
      <h3>Welcome, {username}</h3>
    </Layout>
  );
}
