import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import './Heatmap.scss';

export default class Heatmap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: []
    };
  }
  render() {
    return (
      <div className="Heatmap">
        <Chart
          options={myOptions}
          series={myOptions.series}
          type="heatmap"
          width={700}
          height={320}
        />
      </div>
    );
  }
}

const heatmap5 = '#3F1CCC';
const heatmap4 = '#5557FE';
const heatmap3 = '#7072FF';
const heatmap2 = '#8D8FFF';
const heatmap1 = '#ADAEFF';

const myOptions = {
  chart: {
    id: 'yearly-activity'
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.5,
      colorScale: {
        ranges: [
          {
            from: -30,
            to: 5,
            name: 'low',
            color: heatmap1
          },
          {
            from: 6,
            to: 20,
            name: 'medium',
            color: heatmap2
          },
          {
            from: 21,
            to: 45,
            name: 'high',
            color: heatmap3
          },
          {
            from: 46,
            to: 55,
            name: 'extreme',
            color: heatmap4
          }
        ]
      }
    }
  },
  series: [
    {
      name: 'Jan',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Feb',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Mar',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Apr',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'May',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Jun',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Jul',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Aug',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Sep',
      data: generateData(20, {
        min: -30,
        max: 55
      })
    }
  ],
  title: {
    text: 'DesignHub Yearly Activity Heatmap'
  }
};

function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}
