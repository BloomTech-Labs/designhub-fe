import React from 'react';
import bodymovin from 'bodymovin';

import loading from '../ASSETS/loading.json';

import '../SASS/Loading.scss';

const Loading = () => {
  var svgContainer = document.getElementById('svgContainer');
  var animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: 'svg',
    loop: true,
    path: 'https://assets5.lottiefiles.com/datafiles/AX0rqrGV5ahKpWr/data.json'
  });
  return (
    <div className="Loading-container">
      <div id="svgContainer"></div>
      <p className="loading-text">Loading awesome content...</p>
    </div>
  );
};

export default Loading;
