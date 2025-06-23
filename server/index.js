import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import config from "./db/config.js";
import authRoutes from './routes/user.routes.js'
import milestoneRoutes from './routes/milestone.routes.js';
import tipRoutes from './routes/tip.routes.js'

dotenv.config()


const app = express();

const port = process.env.PORT || 8080;

app.use(express.json())
 app.use(cors({
    origin: process.env.FRONTEND_URL.split(','),
    credentials: true,
  }));

app.use('/api',authRoutes)
app.use('/api/milestone',milestoneRoutes)
app.use('/api',tipRoutes)

app.listen(port,()=>{
    console.log(`Server is Running in PORT: ${port}`)
    config();
})