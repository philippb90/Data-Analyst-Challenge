import React from 'react';

interface FrictionPoint {
  id: string;
  step: string;
  dropoffRate: number;
  userCount: number;
  potentialImpact: number;
}

interface FrictionPointsTableProps {
  data: FrictionPoint[];
}

export const FrictionPointsTable: React.FC<FrictionPointsTableProps> = ({ data }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md overflow-x-auto">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Friction Points</h3>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Step</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drop-off Rate</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Count</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((point) => (
            <tr key={point.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{point.step}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{point.dropoffRate}%</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{point.userCount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{point.potentialImpact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};