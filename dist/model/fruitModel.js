"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const fruitSchema = new Schema({
    fruit: {
        type: String,
        lowercase: true,
        required: [true, "Please add a fruit"]
    },
    count: {
        type: Number,
        default: 1
    }
}, { timestamps: true });
const Fruit = mongoose_1.default.model("Fruit", fruitSchema);
exports.default = Fruit;
