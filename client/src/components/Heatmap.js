import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

import './Heatmap.scss';

const Heatmap = () => {
  return (
    <div className="heatmap">
      <h1 className="header">Activity</h1>
      <CalendarHeatmap
        startDate={new Date('2019-01-01')}
        endDate={new Date('2019-12-31')}
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
