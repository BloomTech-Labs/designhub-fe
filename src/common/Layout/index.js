import React from 'react';
import './styles.scss';
import LoginBar from '../Nav/LoginBar';
import TopBar from '../Nav/TopBar';
import { useAuth0 } from '../../utilities/auth-spa';

export default function Layout({ children }) {
  const { user } = useAuth0();
  return (
    <div className="layout-wrapper">
      <div className="nav-wrapper">{!user ? <LoginBar /> : <TopBar />}</div>
      <div className="page-wrapper">{children}</div>
    </div>
  );
}
