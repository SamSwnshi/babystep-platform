import { Router } from "express";
import {
  addTip,
  getAllTips,
  getTips,
  likeTips,
} from "../controllers/tip.controller.js";
import auth from "../middleware/auth.middleware.js";

const tip = Router();

tip.get("/tips", auth, getAllTips);
tip.get("/milestone/:id/tips", auth, getTips);
tip.post("/milestone/:id/tips", auth, addTip);
tip.put("/tips/:id/like", auth, likeTips);
export default tip;
