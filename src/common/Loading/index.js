import React from 'react';
import { GooSpinner } from 'react-spinners-kit';
import './styles.scss';

const Loading = () => {
  return (
    <div className="Loading-container">
      <GooSpinner size={80} color="#5557fe" className="loader" />
    </div>
  );
};

export default Loading;
