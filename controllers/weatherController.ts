import { Request, Response } from 'express';
import { AxiosError } from 'axios';
import axios from 'axios';

// @desc    Get news from open weather map api
// @route   GET /api/key={}/weather/:country
// @access  Private

const openWeatherMapApi = async (req: Request, res: Response) => {
  const city: any = req.params.city;
  const apiKey: string = process.env.OPENWEATHERMAP_API as string;

  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
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

export { openWeatherMapApi };
