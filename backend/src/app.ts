import express from 'express';
import { config } from 'dotenv';
config();
import morgan from 'morgan';
import appRouter from './routes/index.js'; // Ensure this path is correct

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Morgan logging middleware (remove it in production)
app.use(morgan('dev'));

// Corrected the route path to include a leading slash
app.use("/api/v1", appRouter);

export default app;
