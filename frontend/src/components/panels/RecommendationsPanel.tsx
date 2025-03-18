import React from 'react';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
}

interface RecommendationsPanelProps {
  recommendations: Recommendation[];
}

export const RecommendationsPanel: React.FC<RecommendationsPanelProps> = ({ recommendations }) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Recommendations</h3>
      <div className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.id} className="border-l-4 border-blue-500 pl-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium text-gray-900">{rec.title}</h4>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(rec.impact)}`}>
                {rec.impact}
              </span>
            </div>
            <p className="mt-1 text-gray-600">{rec.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};