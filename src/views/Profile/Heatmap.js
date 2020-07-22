import React, { useState, useEffect } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';

import moment from 'moment';
import { withRouter } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { useWindowDimensions } from '../../common/ImageViewer/useWindowDimensions';

import 'react-calendar-heatmap/dist/styles.css';

import './Heatmap.scss';

const Heatmap = (props) => {
  const [today] = useState(new Date());
  const heatmapArr = [];
  const [days, setDays] = useState(-365);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 1024) {
      setDays(-365);
    }
    if (width <= 1024) {
      setDays(-305);
    }
    if (width <= 900) {
      setDays(-280);
    }
    if (width <= 850) {
      setDays(-230);
    }
    if (width <= 740) {
      setDays(-180);
    }
    if (width <= 600) {
      setDays(-160);
    }
    if (width <= 500) {
      setDays(-120);
    }
  }, [width]);

  // This function is used to determine the start date based on what the current date is
  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }

  // Grabs the array of heatmaps based on user Id
  // const getHeatmap = async () => {
  //   const { data } = await axiosWithAuth().get(`api/v1/heatmap/${params}`);
  //   setHeatmapArr(data);
  // };

  // useEffect(() => {
  //   getHeatmap();
  //   // eslint-disable-next-line
  // }, []);

  //conditionally renders the tool tip message when hovering over a square
  const renderToolTip = (value) => {
    if (value.date === null || value.count === null) {
      return {
        'data-tip': `No contributions on this date`,
      };
    } else if (value.count === 1) {
      return {
        'data-tip': `${value.count} contribution on ${moment(value.date).format(
          'MMM Do YYYY'
        )}`,
      };
    } else {
      return {
        'data-tip': `${value.count} contributions on ${moment(
          value.date
        ).format('MMM Do YYYY')}`,
      };
    }
  };
  return (
    <div className="heatmap">
      <h1 className="header">Activity</h1>
      <CalendarHeatmap
        startDate={shiftDate(moment(today).format('YYYY-MM-DD'), days)}
        endDate={moment(today).format('YYYY-MM-DD')}
        values={heatmapArr}
        tooltipDataAttrs={(value) => {
          return renderToolTip(value);
        }}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          } else if (value.count > 5) {
            return `color-scale-high`;
          } else {
            return `color-scale-${value.count}`;
          }
        }}
        gutterSize={6}
      />
      <ReactTooltip />
    </div>
  );
};

export default withRouter(Heatmap);
