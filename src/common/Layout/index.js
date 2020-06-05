import React from 'react';
import './styles.scss';

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <nav className="nav-wrapper">
        <h3>Layout</h3>
      </nav>
      {children}
    </div>
  );
}
