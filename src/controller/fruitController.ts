import express, { Request, Response, NextFunction } from "express";
import Fruit from "../model/fruitModel";

export const addFruit = async (req: Request, res: Response, next: NextFunction) => {
   
    try {
        const data  = req.body.fruit
        const findData = await Fruit.findOne({fruit:data})
        if(findData){
            findData.count++
            findData.save()
            return res.status(200).json({data: findData})
        }
        const fruit = await Fruit.create({ fruit:data })
        res.status(200).json({ message: "Fruit added", data: fruit });

    } catch (error) {
        res.status(500).json(error)
    }

}

export const getFruits = async (req: Request, res: Response, next: NextFunction) => {

    try {

        const fruits = await Fruit.find();
        res.status(200).json({ message: "All fruits", data: fruits});

    } catch (error) {
        res.status(500).json(error)
    }

}

export const removeFruit = async (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id;

    try {
        const data = await Fruit.findByIdAndDelete({ _id: id})
        res.status(200).json({message: "Fruit deleted", data })
    } catch (error) {
        res.status(500).json(error)
    }

}