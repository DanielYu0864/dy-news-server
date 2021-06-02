"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ts_newsapi_1 = __importDefault(require("ts-newsapi"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const app = express_1.default();
const PORT = process.env.PORT || 5000;
const dyNewsKey = process.env.DY_API;
app.get('/', (req, res) => {
    res.send('home');
});
app.get(`/newsapi/key=${dyNewsKey}/:country`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const country = req.params.country;
    const apiKey = process.env.NEWS_API;
    const newsAPI = new ts_newsapi_1.default(apiKey);
    const topHeadlines = yield newsAPI.getTopHeadlines({
        country: country,
        category: 'business',
        pageSize: 40,
        page: 1,
    });
    // const { articles } = topHeadlines;
    res.send(topHeadlines);
}));
app.get(`/weatherapi/key=${dyNewsKey}/:city`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const city = req.params.city;
    const apiKey = process.env.OPENWEATHERMAP_API;
    const { data } = yield axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    res.send(data);
}));
app.listen(PORT, () => console.log(`⚡Server is running here 👉 https://localhost:${PORT}`));
