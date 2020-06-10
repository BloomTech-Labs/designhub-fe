import React from 'react';
import './styles.scss';
import CreateProject from '../../views/CreateProject/index';
export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <nav className="nav-wrapper">
        <CreateProject />
        <h3>Layout</h3>
      </nav>
      {children}
    </div>
  );
}
