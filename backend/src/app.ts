import express from 'express';
import { config } from 'dotenv';
config();
import morgan from 'morgan';
import appRouter from './routes/index.js';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// remove it in production
app.use(morgan('dev'));

app.use("api/v1", appRouter)


export default app;
