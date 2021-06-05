import express from 'express';

const router = express.Router();
import { newsapi } from '../controllers/newsController';

router.route(`/:country/:category`).get(newsapi);

export default router;
