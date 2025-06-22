import mongoose from "mongoose";

const tipSchema = new mongoose.Schema({},{timestamps: true})

const Tip = mongoose.model("Tip",tipSchema);

export default Tip;