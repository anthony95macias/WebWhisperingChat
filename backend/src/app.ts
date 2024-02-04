import express from 'express';
import { config } from 'dotenv';
config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

export default app;
