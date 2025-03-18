import { Router } from 'express';
import { EngagementAnalysis } from '../services/EngagementAnalysis';
import { ReportGenerator } from '../services/ReportGenerator';
import { RecommendationEngine } from '../analysis/RecommendationEngine';
import { logger } from '../utils/logger';

const analyticsRouter = Router();
const engagementAnalysis = new EngagementAnalysis();
const reportGenerator = new ReportGenerator();
const recommendationEngine = new RecommendationEngine();

analyticsRouter.get('/metrics', async (req, res) => {
  try {
    const metrics = await engagementAnalysis.getMetrics();
    res.json(metrics);
  } catch (error) {
    logger.error('Error fetching metrics:', error);
    res.status(500).json({ error: 'Failed to fetch metrics' });
  }
});

analyticsRouter.get('/retention', async (req, res) => {
  try {
    const retentionData = await engagementAnalysis.getRetentionData();
    res.json(retentionData);
  } catch (error) {
    logger.error('Error fetching retention data:', error);
    res.status(500).json({ error: 'Failed to fetch retention data' });
  }
});

analyticsRouter.get('/recommendations', async (req, res) => {
  try {
    const recommendations = await recommendationEngine.generateRecommendations();
    res.json(recommendations);
  } catch (error) {
    logger.error('Error generating recommendations:', error);
    res.status(500).json({ error: 'Failed to generate recommendations' });
  }
});

analyticsRouter.post('/export', async (req, res) => {
  try {
    const report = await reportGenerator.generateReport(req.body);
    res.json(report);
  } catch (error) {
    logger.error('Error generating report:', error);
    res.status(500).json({ error: 'Failed to generate report' });
  }
});

export { analyticsRouter };