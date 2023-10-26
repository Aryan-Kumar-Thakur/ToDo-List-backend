import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { createTask, getMyTask, updateTask , deleteTask} from "../controllers/task.js";

const router = express.Router();

router.post("/new",isAuthenticated,createTask)
router.get("/my",isAuthenticated,getMyTask)
router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask)

export default router