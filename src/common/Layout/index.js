import React from 'react';
import './styles.scss';
import LoginBar from '../Nav/LoginBar';
export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <div className="nav-wrapper">
        <LoginBar />
      </div>
      <div className="page-wrapper">
      {children}
      </div>
    </div>
  );
}
