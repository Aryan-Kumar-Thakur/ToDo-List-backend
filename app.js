import express from "express";
import bodyParser from "body-parser";
import {config} from "dotenv"
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
import { errorMiddleware } from "./middlewares/error.js";

config({
    path:"./db/config.env"
})

export const app = express();


//middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: [process.env.FRONTEND_URL], //allow request only from these site
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true  //for getting cookies and other headers from backend
}))

//using routes
app.use("/api/v1/users",userRouter)
app.use("/api/v1/tasks",taskRouter)




app.get("/",(req,res)=>{
    res.send("welcome to home page")
})

//using error middleware
app.use(errorMiddleware)