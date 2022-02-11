"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fruitController_1 = require("../controller/fruitController");
const router = express_1.default.Router();
//Get Request
router.get("/fruit", fruitController_1.getFruits);
//Post Request
router.post("/fruit", fruitController_1.addFruit);
//Delete Request
router.delete("/:id/fruit", fruitController_1.removeFruit);
exports.default = router;
