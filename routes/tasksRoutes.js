import express from "express";
import { getAllTasks,deleteTask,updateTask,createTask,getTask } from "../controllers/taskController.js";
const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).delete(deleteTask).patch(updateTask);
export default router;