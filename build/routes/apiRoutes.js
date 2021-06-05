"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const newsController_1 = require("../controllers/newsController");
const weatherController_1 = require("../controllers/weatherController");
const newsapiRoutes_1 = __importDefault(require("./newsapiRoutes"));
const router = express_1.default.Router();
router.route(`/news/:country`).get(newsController_1.newsapi);
router.use('/news', newsapiRoutes_1.default);
router.route(`/weather/:city`).get(weatherController_1.openWeatherMapApi);
exports.default = router;
