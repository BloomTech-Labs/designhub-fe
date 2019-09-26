import React, { useState, useEffect } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import 'react-calendar-heatmap/dist/styles.css';

import '../../SASS/Heatmap.scss';

const Heatmap = props => {
  const [today, setToday] = useState(new Date());
  const [params, setParams] = useState(props.match.params.id);
  const [heatmapArr, setHeatmapArr] = useState([]);

  useEffect(() => {
    getHeatmap();
  }, []);

  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }

  console.log(heatmapArr);
  const getHeatmap = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/heatmap/${params}`
    );
    setHeatmapArr(data);
  };

  return (
    <div className="heatmap">
      <h1 className="header">Activity</h1>
      <CalendarHeatmap
        startDate={shiftDate(today, -150)}
        endDate={today}
        values={heatmapArr}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
        gutterSize={6}
        showWeekdayLabels={true}
        tooltipDataAttrs={value => {
          return { 'data-tooltip': 'Tooltip' + value };
        }}
      />
    </div>
  );
};

export default withRouter(Heatmap);
