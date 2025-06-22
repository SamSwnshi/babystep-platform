import mongoose from "mongoose";
import User from "./user.models.js";

const milestoneSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    note: {
        type: String
    }
},{timestamps: true})

const Milestone = mongoose.model("Milestone",milestoneSchema);

export default Milestone;