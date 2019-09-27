import React, { useState, useEffect } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import axios from 'axios';
import moment from 'moment';
import { withRouter } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import 'react-calendar-heatmap/dist/styles.css';

import '../../SASS/Heatmap.scss';

const Heatmap = props => {
  const [today] = useState(new Date());
  const [params] = useState(props.match.params.id);
  const [heatmapArr, setHeatmapArr] = useState([]);

  useEffect(() => {
    getHeatmap();
  }, []);

  // This function is used to determine the start date based on what the current date is
  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }

  // Grabs the array of heatmaps based on user Id
  const getHeatmap = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/heatmap/${params}`
    );
    setHeatmapArr(data);
  };

  //conditionally renders the tool tip message when hovering over a square
  const renderToolTip = value => {
    if (value.date === null || value.count === null) {
      return {
        'data-tip': `No contributions on this date`
      };
    } else if (value.count === 1) {
      return {
        'data-tip': `${value.count} contribution on ${moment(value.date).format(
          'MMM Do YYYY'
        )}`
      };
    } else {
      return {
        'data-tip': ` ${value.count} contributions on ${moment(
          value.date
        ).format('MMM Do YYYY')}`
      };
    }
  };

  return (
    <div className="heatmap">
      <h1 className="header">Activity</h1>
      <CalendarHeatmap
        startDate={shiftDate(today, -270)}
        endDate={today}
        values={heatmapArr}
        tooltipDataAttrs={value => {
          return renderToolTip(value);
        }}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
        gutterSize={6}
        showWeekdayLabels={true}
      />
      <ReactTooltip />
    </div>
  );
};

export default withRouter(Heatmap);
