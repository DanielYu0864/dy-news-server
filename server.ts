import express from 'express';
import dotenv from 'dotenv';
import apiRoutes from './routes/apiRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const dyNewsKey: string = process.env.DY_API as string;

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// main route
app.get('/', (req, res) => {
  res.send('dy-news-server');
});

// route to get api
app.use(`/api/key=${dyNewsKey}`, apiRoutes);

app.listen(PORT, () =>
  console.log(`⚡Server is running here 👉 https://localhost:${PORT}`)
);
