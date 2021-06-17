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
exports.openWeatherMapApiCrd = exports.openWeatherMapApiCity = void 0;
const axios_1 = __importDefault(require("axios"));
// @desc    Get weather info from open weather map api by city name
// @route   GET /api/key={}/weather/:country/:language
// @access  Private
const openWeatherMapApiCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const city = req.params.city;
    const apiKey = process.env.OPENWEATHERMAP_API;
    const language = req.params.lang ? req.params.lang : 'en';
    try {
        const { data } = yield axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&appid=${apiKey}`);
        yield res.json(data);
    }
    catch (error) {
        const err = error;
        if (err.response) {
            console.log(err.response.status);
            console.log(err.response.data);
            yield res.json(err.response.data);
        }
    }
});
exports.openWeatherMapApiCity = openWeatherMapApiCity;
// @desc    Get wehater info from open weather map api by coordinates
// @route   GET /api/key={}/weather/crd/:lat/:lon/:language
// @access  Private
const openWeatherMapApiCrd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lat = req.params.lat;
    const lon = req.params.lon;
    const apiKey = process.env.OPENWEATHERMAP_API;
    const language = req.params.lang ? req.params.lang : 'en';
    try {
        const { data } = yield axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${language}&appid=${apiKey}`);
        yield res.json(data);
    }
    catch (error) {
        const err = error;
        if (err.response) {
            console.log(err.response.status);
            console.log(err.response.data);
            yield res.json(err.response.data);
        }
    }
});
exports.openWeatherMapApiCrd = openWeatherMapApiCrd;
