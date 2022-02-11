"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const fruitRoute_1 = __importDefault(require("./routes/fruitRoute"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
//express app
const app = (0, express_1.default)();
//middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/", fruitRoute_1.default);
//port
const port = process.env.PORT || 4000;
//connect to database
const dbURI = process.env.dbURI;
mongoose_1.default.connect(dbURI)
    .then(() => console.log("Connected to database"))
    .catch(error => console.log(error));
app.listen(port, () => console.log(`Listening on port: ${port}`));
exports.default = app;
