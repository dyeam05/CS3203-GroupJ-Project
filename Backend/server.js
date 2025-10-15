// Backend/server.js
import express from 'express';
import cors from 'cors';
import eventsRouter from './routes/events.js';

const app = express();
app.use(cors());
app.use(express.json());

// mount routes
app.use('/api', eventsRouter);

// basic health check
app.get('/', (_req, res) => res.send('Backend is running'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
