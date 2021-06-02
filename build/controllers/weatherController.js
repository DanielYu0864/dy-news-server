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
exports.openWeatherMapApi = void 0;
const axios_1 = __importDefault(require("axios"));
// @desc    Get news from open weather map api
// @route   GET /api/key={}/weather/:country
// @access  Private
const openWeatherMapApi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const city = req.params.city;
    const apiKey = process.env.OPENWEATHERMAP_API;
    const { data } = yield axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    res.send(data);
});
exports.openWeatherMapApi = openWeatherMapApi;
