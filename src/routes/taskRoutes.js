import express from "express";
import TaskController from "../controllers/TaskController.js";

const router = express.Router();

router.post("/createTask", TaskController.createTask);

export default router;
