import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
export const app = express();
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
