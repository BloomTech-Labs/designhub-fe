import React, { useState } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import axios from 'axios';
import 'react-calendar-heatmap/dist/styles.css';

import '../../SASS/Heatmap.scss';

const Heatmap = () => {
  const [today, setToday] = useState(new Date());

  function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
  }

  const getHeatmap = id => {};

  return (
    <div className="heatmap">
      <h1 className="header">Activity</h1>
      <CalendarHeatmap
        startDate={shiftDate(today, -150)}
        endDate={today}
        values={[
          { date: '2019-09-16', count: 1 },
          { date: '2019-09-17', count: 5 },
          { date: '2019-09-18', count: 3 },
          { date: '2019-09-18', count: 0 },
          { date: '2019-09-20', count: 5 },
          { date: '2019-09-21', count: 2 },
          { date: '2019-09-22', count: 5 },
          { date: '2019-09-23', count: 4 },
          { date: '2019-09-24', count: 1 },
          { date: '2019-09-30', count: 1 },
          { date: '2019-10-1', count: 5 }
        ]}
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

export default Heatmap;
