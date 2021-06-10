import NewsAPI from 'ts-newsapi';
import { Request, Response } from 'express';
import { AxiosError } from 'axios';

// @desc    Get news from newsapi.io
// @route   GET /api/key={}/news/:country/:cateogry
// @access  Private

const newsapi = async (req: Request, res: Response) => {
  const country: any = req.params.country;
  /* country list: [
  'ae', 'ar', 'at', 'au', 'be', 'bg', 'br',
  'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de',
  'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id',
  'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt',
  'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no',
  'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru',
  'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr',
  'tw', 'ua', 'us', 've', 'za'
  ] */
  const category: any = req.params.category;
  /* category list: [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology'
  ] */

  const apiKey: string = process.env.NEWS_API as string;
  const newsAPI = new NewsAPI(apiKey);

  try {
    const topHeadlines = await newsAPI.getTopHeadlines({
      country: country ? country : 'us',
      category: category ? category : 'general',
      pageSize: 45,
      page: 1,
    });
    await res.json(topHeadlines);
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.log(err.response.status);
      console.log(err.response.data);

      await res.json(err.response.data);
    }
  }
};

export { newsapi };
