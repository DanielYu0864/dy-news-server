import express from 'express';
import axios from 'axios';

// @desc    Get news from open weather map api
// @route   GET /api/key={}/weather/:country
// @access  Private

const openWeatherMapApi = async (
  req: express.Request,
  res: express.Response
) => {
  const city: any = req.params.city;
  const apiKey: string = process.env.OPENWEATHERMAP_API as string;
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );

  try {
    await res.json(data);
  } catch (error) {
    throw 'error:' + error.message;
  }
};

export { openWeatherMapApi };
