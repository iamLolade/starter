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
exports.removeFruit = exports.getFruits = exports.addFruit = void 0;
const fruitModel_1 = __importDefault(require("../model/fruitModel"));
const addFruit = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body.fruit;
        const findData = yield fruitModel_1.default.findOne({ fruit: data });
        if (findData) {
            findData.count++;
            findData.save();
            return res.status(200).json({ data: findData });
        }
        const fruit = yield fruitModel_1.default.create({ fruit: data });
        res.status(200).json({ message: "Fruit added", data: fruit });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.addFruit = addFruit;
const getFruits = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fruits = yield fruitModel_1.default.find();
        res.status(200).json({ message: "All fruits", data: fruits });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getFruits = getFruits;
const removeFruit = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const data = yield fruitModel_1.default.findByIdAndDelete({ _id: id });
        res.status(200).json({ message: "Fruit deleted", data });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.removeFruit = removeFruit;
