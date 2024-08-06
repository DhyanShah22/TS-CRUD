import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { config } from './config';
import dotenv from 'dotenv';

dotenv.config();
import logger from './logger/logger'
import { studentRoutes } from './routes/studentRoutes';
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000

mongoose.connect(config.mongoUri)
  .then(() => {
    logger.info('Connected to MongoDB');
    app.listen(port, () => {
      logger.info(`Server running on port ${config.port}`);
    });
  })
  .catch(err => {
    logger.error('Failed to connect to MongoDB', err);
  });

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
  }) 
  app.use('/api', studentRoutes)