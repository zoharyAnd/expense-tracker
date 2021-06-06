import React from 'react';
import { Chart } from 'primereact/chart';

const CustomChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Shopping',
        backgroundColor: '#42A5F5',
        data: [37, 267, 150, 81, 26, 15, 5],
      },
      {
        label: 'Bills',
        backgroundColor: '#FFA726',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };

  const options = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#495057',
      },
      position: 'right',
      align: 'start',
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: '#495057',
        },
        scaleLabel: {
          display: true,
          labelString: 'Time',
        },
      }],
      yAxes: [{
        ticks: {
          fontColor: '#495057',

          // Include a dollar sign in the ticks
          callback(value) {
            return `€ ${value}`;
          },
        },
        scaleLabel: {
          display: true,
          labelString: 'Prices',
        },
      }],
    },
  };

  return (
    <div className="chart-wrapper">
      <div className="card">
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
};

export default CustomChart;
