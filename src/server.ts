import express from 'express';
import mongoose from 'mongoose';
import { config } from './config';
import logger from './logger/logger'
import { studentRoutes } from './routes/studentRoutes';
const app = express();

app.use(express.json());

mongoose.connect(config.mongoUri)
  .then(() => {
    logger.info('Connected to MongoDB');
    app.listen(config.port, () => {
      logger.info(`Server running on port ${config.port}`);
    });
  })
  .catch(err => {
    logger.error('Failed to connect to MongoDB', err);
  });

  app.use('/api', studentRoutes)