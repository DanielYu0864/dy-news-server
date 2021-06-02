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
exports.newsapi = void 0;
const ts_newsapi_1 = __importDefault(require("ts-newsapi"));
// @desc    Get news from newsapi.io
// @route   GET /api/key={}/news/:country
// @access  Private
const newsapi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const country = req.params.country;
    const apiKey = process.env.NEWS_API;
    const newsAPI = new ts_newsapi_1.default(apiKey);
    const topHeadlines = yield newsAPI.getTopHeadlines({
        country: country,
        category: 'business',
        pageSize: 40,
        page: 1,
    });
    res.send(topHeadlines);
});
exports.newsapi = newsapi;
