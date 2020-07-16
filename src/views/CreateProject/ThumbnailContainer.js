import React from 'react';
import './styles.scss';

import remove from '../../ASSETS/remove.svg';

const ThumbnailContainer = ({ projectPhotos }) => {
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
  };
  return (
    <div className="thumbnail-container ">
      {projectPhotos.map((photo, index) => (
        <div key={index}>
          <img alt="" src={remove} className="remove" onClick={(e) => {}} />

          <div className="thumb" key={index}>
            <div style={thumbInner}>
              <img
                alt="project thumbnail"
                src={photo.url}
                className="thumbnail"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThumbnailContainer;
