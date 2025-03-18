import { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export interface AnalyticsData {
  metrics: {
    totalUsers: number;
    activeUsers: number;
    averageTransactionValue: number;
    completionRate: number;
  };
  retention: {
    labels: string[];
    values: number[];
  };
  recommendations: Array<{
    id: string;
    title: string;
    description: string;
    impact: 'high' | 'medium' | 'low';
  }>;
}

export const useAnalyticsData = (timeRange: string) => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [metricsRes, retentionRes, recommendationsRes] = await Promise.all([
          axios.get(`${API_BASE_URL}/metrics?range=${timeRange}`),
          axios.get(`${API_BASE_URL}/retention?range=${timeRange}`),
          axios.get(`${API_BASE_URL}/recommendations`)
        ]);

        setData({
          metrics: metricsRes.data,
          retention: retentionRes.data,
          recommendations: recommendationsRes.data
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch data'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [timeRange]);

  return { data, loading, error };
};