import React, { useMemo } from 'react';
import { Chart } from 'primereact/chart';
import { getChartData } from '../utils/formatData';

export interface Props {
  from: string;
  to: string;
  refresh: boolean;
}

const CustomChart = ({ from, to, refresh }: Props) => {
  const localExpenses = useMemo(() => {
    return JSON.parse(localStorage.getItem('expenses')) !== null ? JSON.parse(localStorage.getItem('expenses')) : [];
  }, [from, to, refresh]);

  const data = useMemo(() => {
    return getChartData(localExpenses, from, to);
  }, [from, to, refresh]);

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
      }],
      yAxes: [{
        ticks: {
          fontColor: '#495057',

          // Include a dollar sign in the ticks
          callback(value) {
            return `${value} €`;
          },
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
