import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { analyticsRouter } from './controllers/AnalyticsController';
import { logger } from './utils/logger';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'];
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());

// Health check endpoint
app.get('/api/health', (_, res) => {
  res.json({ status: 'ok' });
});

// Routes
app.use('/api', analyticsRouter);

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});