import React from 'react';
import './styles.scss';
import LoginBar from '../Nav/LoginBar';
import TopBar from '../Nav/TopBar';
export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <div className="nav-wrapper">
        <LoginBar />
        {/*<TopBar />*/}
      </div>
      <div className="page-wrapper">
      {children}
      </div>
    </div>
  );
}
