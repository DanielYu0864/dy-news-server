import express from 'express';
import NewsAPI from 'ts-newsapi';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const dyNewsKey: string = process.env.DY_API as string;

app.get('/', (req, res) => {
  res.send('home');
});

app.get(`/newsapi/key=${dyNewsKey}/:country`, async (req, res) => {
  const country: any = req.params.country;

  const apiKey: string = process.env.NEWS_API as string;
  const newsAPI = new NewsAPI(apiKey);

  const topHeadlines = await newsAPI.getTopHeadlines({
    country: country,
    category: 'business',
    pageSize: 40,
    page: 1,
  });

  res.send(topHeadlines);
});

app.get(`/weatherapi/key=${dyNewsKey}/:city`, async (req, res) => {
  const city: any = req.params.city;
  const apiKey: string = process.env.OPENWEATHERMAP_API as string;
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );

  res.send(data);
});

app.listen(PORT, () =>
  console.log(`⚡Server is running here 👉 https://localhost:${PORT}`)
);
