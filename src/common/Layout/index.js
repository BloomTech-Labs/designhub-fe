import React from 'react';
import './styles.scss';
import LoginBar from '../Nav/LoginBar';
export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <nav className="nav-wrapper">
        <LoginBar />
      </nav>
      {children}
    </div>
  );
}
