import { Router } from "express";
import { createMilestone, deleteMilestone, editMilestone, getMilestone,  } from "../controllers/milestone.controller.js";
import auth from '../middleware/auth.middleware.js'
const milestone = Router();

milestone.get('/',auth,getMilestone)
milestone.post('/create',auth, createMilestone)
milestone.put('/:id',editMilestone)
milestone.delete('/delete',deleteMilestone)


export default milestone;