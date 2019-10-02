import React from 'react';
import Loader from 'react-loader-spinner'
import '../SASS/Loading.scss';

const Loading = () => {
  return (
    <div className="Loading-container">
      <Loader
            className="loading-text"
            type="Grid"
            color="#C0C0C0"
            height={150}
            width={150}
          />
    </div>
  );
};

export default Loading;
