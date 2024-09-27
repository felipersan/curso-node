import TaskModel from "../models/taskModel.mjs";

export default class TaskController {
  listTask(id) {
    if (!id) {
      throw new Error("Envie o id para pesquisa");
    }

    const taskModel = new TaskModel();
    const taskReturn = taskModel.listTask(id);
    return taskReturn;
  }
}
