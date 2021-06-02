import express from 'express';
import dotenv from 'dotenv';
import apiRoutes from './routes/apiRoutes';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const dyNewsKey: string = process.env.DY_API as string;

// main route
app.get('/', (req, res) => {
  res.send('dy-news-server');
});

// route to get api
app.use(`/api/key=${dyNewsKey}`, apiRoutes);

app.listen(PORT, () =>
  console.log(`⚡Server is running here 👉 https://localhost:${PORT}`)
);
