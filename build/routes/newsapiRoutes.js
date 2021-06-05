"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const newsController_1 = require("../controllers/newsController");
router.route(`/:country/:category`).get(newsController_1.newsapi);
exports.default = router;
