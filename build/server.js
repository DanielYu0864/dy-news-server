"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const apiRoutes_1 = __importDefault(require("./routes/apiRoutes"));
dotenv_1.default.config();
const app = express_1.default();
const PORT = process.env.PORT || 5000;
const dyNewsKey = process.env.DY_API;
app.get('/', (req, res) => {
    res.send('home');
});
app.use(`/api/key=${dyNewsKey}`, apiRoutes_1.default);
// app.get(`/api/key=${dyNewsKey}/news/:country`, async (req, res) => {
//   const country: any = req.params.country;
//   const apiKey: string = process.env.NEWS_API as string;
//   const newsAPI = new NewsAPI(apiKey);
//   const topHeadlines = await newsAPI.getTopHeadlines({
//     country: country,
//     category: 'business',
//     pageSize: 40,
//     page: 1,
//   });
//   res.send(topHeadlines);
// });
// app.get(`/api/key=${dyNewsKey}/weather/:city`, async (req, res) => {
//   const city: any = req.params.city;
//   const apiKey: string = process.env.OPENWEATHERMAP_API as string;
//   const { data } = await axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//   );
//   res.send(data);
// });
app.listen(PORT, () => console.log(`⚡Server is running here 👉 https://localhost:${PORT}`));
