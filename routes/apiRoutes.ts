import express from 'express';
import { newsapi } from '../controllers/newsController';
import {
  openWeatherMapApiCity,
  openWeatherMapApiCrd,
} from '../controllers/weatherController';
import newsapiRoutes from './newsapiRoutes';

const router = express.Router();
router.route(`/news/:country`).get(newsapi);
router.use('/news', newsapiRoutes);
router.route(`/weather/:city`).get(openWeatherMapApiCity);
router.route(`/weather/:city/:lang`).get(openWeatherMapApiCity);
router.route(`/weather/crd/:lat/:lon`).get(openWeatherMapApiCrd);
router.route(`/weather/crd/:lat/:lon/:lang`).get(openWeatherMapApiCrd);

export default router;
