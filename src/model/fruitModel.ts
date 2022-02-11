import mongoose from "mongoose";

const Schema = mongoose.Schema;

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
}, { timestamps: true })

const Fruit = mongoose.model("Fruit", fruitSchema);

export default Fruit;