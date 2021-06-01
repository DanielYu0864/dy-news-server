import express from 'express';
import NewsAPI from 'ts-newsapi';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('home');
});

app.get('/newsapi/:country', async (req, res) => {
  const country: any = req.params.country;

  const apiKey: string = process.env.NEWS_API as string;
  const newsAPI = new NewsAPI(apiKey);

  const topHeadlines = await newsAPI.getTopHeadlines({
    country: country,
    category: 'business',
    pageSize: 40,
    page: 1,
  });

  const { articles } = topHeadlines;

  res.send(topHeadlines);
});

app.listen(PORT, () =>
  console.log(`⚡Server is running here 👉 https://localhost:${PORT}`)
);
