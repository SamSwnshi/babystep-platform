import mongoose from "mongoose";

const milestoneSchema = new mongoose.Schema({},{timestamps: true})

const Milestone = mongoose.model("Milestone",milestoneSchema);

export default Milestone;