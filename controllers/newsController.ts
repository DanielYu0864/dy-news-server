import NewsAPI from 'ts-newsapi';
import express from 'express';

// @desc    Get news from newsapi.io
// @route   GET /api/key={}/news/:country
// @access  Private

const newsapi = async (req: express.Request, res: express.Response) => {
  const country: any = req.params.country;

  const apiKey: string = process.env.NEWS_API as string;
  const newsAPI = new NewsAPI(apiKey);

  const topHeadlines = await newsAPI.getTopHeadlines({
    country: country,
    category: 'business',
    pageSize: 40,
    page: 1,
  });
  try {
    await res.json(topHeadlines);
  } catch (error) {
    throw 'error:' + error.message;
  }
};

export { newsapi };
