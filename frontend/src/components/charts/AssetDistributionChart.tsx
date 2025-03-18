import React from 'react';
import { Pie } from 'react-chartjs-2';

interface AssetDistributionChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}

export const AssetDistributionChart: React.FC<AssetDistributionChartProps> = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#F59E0B',
          '#EF4444',
          '#8B5CF6',
        ],
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Asset Distribution</h3>
      <div className="h-64">
        <Pie data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};