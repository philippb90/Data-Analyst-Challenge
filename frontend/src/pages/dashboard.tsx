import React, { useState } from 'react';
import { useAnalyticsData } from '../hooks/useAnalyticsData';
import { MetricCard } from '../components/cards/MetricCard';
import { RetentionChart } from '../components/charts/RetentionChart';
import { AssetDistributionChart } from '../components/charts/AssetDistributionChart';
import { TrendsOverview } from '../components/charts/TrendsOverview';
import { RecommendationsPanel } from '../components/panels/RecommendationsPanel';
import { FrictionPointsTable } from '../components/tables/FrictionPointsTable';
import { TimeRangeSelector } from '../components/controls/TimeRangeSelector';
import { ReportExportButton } from '../components/ReportExportButton';

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('7d');
  const { data, loading, error } = useAnalyticsData(timeRange);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600">Error loading analytics data</div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <div className="flex space-x-4">
            <TimeRangeSelector value={timeRange} onChange={setTimeRange} />
            <ReportExportButton />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Users"
            value={data.metrics.totalUsers}
            change="+12%"
            trend="up"
          />
          <MetricCard
            title="Active Users"
            value={data.metrics.activeUsers}
            change="-3%"
            trend="down"
          />
          <MetricCard
            title="Avg Transaction Value"
            value={`$${data.metrics.averageTransactionValue}`}
            change="+5%"
            trend="up"
          />
          <MetricCard
            title="Completion Rate"
            value={`${data.metrics.completionRate}%`}
            change="+2%"
            trend="up"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <RetentionChart data={data.retention} />
          <AssetDistributionChart
            data={{
              labels: ['BTC', 'ETH', 'USDT', 'USDC', 'Other'],
              values: [40, 25, 15, 12, 8],
            }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <TrendsOverview
            data={{
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              values: [65, 59, 80, 81, 56, 55, 40],
            }}
          />
          <RecommendationsPanel recommendations={data.recommendations} />
        </div>

        <FrictionPointsTable
          data={[
            { id: '1', step: 'Wallet Connection', dropoffRate: 15, userCount: 1200, potentialImpact: 180 },
            { id: '2', step: 'Asset Selection', dropoffRate: 8, userCount: 1020, potentialImpact: 82 },
            { id: '3', step: 'Transaction Approval', dropoffRate: 12, userCount: 938, potentialImpact: 113 },
            { id: '4', step: 'Transaction Confirmation', dropoffRate: 5, userCount: 825, potentialImpact: 41 },
          ]}
        />
      </div>
    </div>
  );
}