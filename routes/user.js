import express from "express";
import {createUser,loginUser,getMyProfile,logoutUser} from '../controllers/user.js'
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router()

router.post("/new",createUser)

router.post("/login",loginUser)

router.get("/me",isAuthenticated,getMyProfile)

router.get("/logout",logoutUser)

export default router