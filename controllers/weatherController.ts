import { Request, Response } from 'express';
import { AxiosError } from 'axios';
import axios from 'axios';

// @desc    Get weather info from open weather map api by city name
// @route   GET /api/key={}/weather/:country/:language
// @access  Private

const openWeatherMapApiCity = async (req: Request, res: Response) => {
  const city: any = req.params.city;
  const apiKey: string = process.env.OPENWEATHERMAP_API as string;
  const language: string = req.params.lang ? req.params.lang : 'en';

  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&appid=${apiKey}`
    );
    await res.json(data);
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.log(err.response.status);
      console.log(err.response.data);

      await res.json(err.response.data);
    }
  }
};
// @desc    Get wehater info from open weather map api by coordinates
// @route   GET /api/key={}/weather/crd/:lat/:lon/:language
// @access  Private

const openWeatherMapApiCrd = async (req: Request, res: Response) => {
  const lat: any = req.params.lat;
  const lon: any = req.params.lon;
  const apiKey: string = process.env.OPENWEATHERMAP_API as string;
  const language: string = req.params.lang ? req.params.lang : 'en';

  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${language}&appid=${apiKey}`
    );
    await res.json(data);
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.log(err.response.status);
      console.log(err.response.data);

      await res.json(err.response.data);
    }
  }
};

export { openWeatherMapApiCity, openWeatherMapApiCrd };
