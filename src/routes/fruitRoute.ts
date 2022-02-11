import express from "express";
import { addFruit, getFruits, removeFruit } from "../controller/fruitController";

const router = express.Router();

//Get Request
router.get("/fruit", getFruits)

//Post Request
router.post("/fruit", addFruit)

//Delete Request
router.delete("/:id/fruit", removeFruit)

export default router;


