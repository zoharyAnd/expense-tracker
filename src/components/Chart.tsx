import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import { Chart } from 'primereact/chart';

const CustomChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Shopping',
        backgroundColor: '#42A5F5',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'Bills',
        backgroundColor: '#FFA726',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  };

  const options = {
    legend: {
      labels: {
        fontColor: '#495057',
      },
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: '#495057',
        },
      }],
      yAxes: [{
        ticks: {
          fontColor: '#495057',
        },
      }],
    },
  };

  return (
    <div className="chart-wrapper container">
      <div className="card">
        <Chart type="bar" data={data} options={options} />
      </div>
    </div>
  );
};

export default CustomChart;
