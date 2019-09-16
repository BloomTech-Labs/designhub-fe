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
          height={550}
          className="chart"
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
    id: 'yearly-activity',
    toolbar: {
      show: false
    }
  },
  title: {
    text: 'Activity',
    align: 'left',
    margin: 0,
    offsetX: 15,
    offsetY: 15,
    floating: false,
    style: {
      fontSize: '16px',
      color: 'white'
    }
  },
  grid: {
    show: true,
    borderColor: '#15161a',
    padding: {
      top: 0,
      right: 20,
      bottom: 10,
      left: 10
    }
  },
  xaxis: {
    labels: {
      show: false
    }
  },
  yaxis: {
    labels: {
      show: true,
      align: 'right'
    }
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'right',
    markers: {
      width: 20,
      height: 20,
      radius: 2
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    colors: ['#15161a'],
    width: 10
  },
  plotOptions: {
    heatmap: {
      radius: 8,
      shadeIntensity: 0.5,
      colorScale: {
        ranges: [
          {
            from: -30,
            to: 5,
            name: ' ',
            color: heatmap1
          },
          {
            from: 6,
            to: 20,
            name: ' ',
            color: heatmap2
          },
          {
            from: 21,
            to: 45,
            name: ' ',
            color: heatmap3
          },
          {
            from: 46,
            to: 55,
            name: ' ',
            color: heatmap4
          },
          {
            from: 56,
            to: 85,
            name: ' ',
            color: heatmap5
          }
        ]
      }
    }
  },
  series: [
    {
      name: 'Jan',
      data: generateData(31, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Feb',
      data: generateData(28, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Mar',
      data: generateData(31, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Apr',
      data: generateData(30, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'May',
      data: generateData(31, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Jun',
      data: generateData(30, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Jul',
      data: generateData(31, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Aug',
      data: generateData(31, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Sep',
      data: generateData(30, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Oct',
      data: generateData(31, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Nov',
      data: generateData(30, {
        min: -30,
        max: 55
      })
    },
    {
      name: 'Dec',
      data: generateData(31, {
        min: -30,
        max: 55
      })
    }
  ]
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
