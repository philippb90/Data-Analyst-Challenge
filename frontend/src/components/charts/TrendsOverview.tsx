import React from 'react';
import { Bar } from 'react-chartjs-2';

interface TrendsOverviewProps {
  data: {
    labels: string[];
    values: number[];
  };
}

export const TrendsOverview: React.FC<TrendsOverviewProps> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Transaction Volume',
        data: data.values,
        backgroundColor: '#3B82F6',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Transaction Trends</h3>
      <div className="h-64">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};