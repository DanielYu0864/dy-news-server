import express from 'express';
import { newsapi } from '../controllers/newsController';
import { openWeatherMapApi } from '../controllers/weatherController';
import newsapiRoutes from './newsapiRoutes';

const router = express.Router();
router.route(`/news/:country`).get(newsapi);
router.use('/news', newsapiRoutes);
router.route(`/weather/:city`).get(openWeatherMapApi);
router.route(`/weather/:city/:lang`).get(openWeatherMapApi);

export default router;
