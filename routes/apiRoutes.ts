import express from 'express';

const router = express.Router();
import { newsapi } from '../controllers/newsController';
import { openWeatherMapApi } from '../controllers/weatherController';
router.route(`/news/:country`).get(newsapi);
router.route(`/weather/:city`).get(openWeatherMapApi);

export default router;
