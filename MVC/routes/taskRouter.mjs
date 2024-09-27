import { Router } from "express";
import TaskController from "../controllers/taskController.mjs";

const router = new Router();

router.get("/task", (req, res) => {
  try {
    const { id } = req.query;

    const taskController = new TaskController();
    const taskReturn = taskController.listTask(id);

    res.status(200).json(taskReturn);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});

export default router;
