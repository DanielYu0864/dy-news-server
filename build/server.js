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
// main route
app.get('/', (req, res) => {
    res.send('dy-news-server');
});
// route to get api
app.use(`/api/key=${dyNewsKey}`, apiRoutes_1.default);
app.listen(PORT, () => console.log(`⚡Server is running here 👉 https://localhost:${PORT}`));
