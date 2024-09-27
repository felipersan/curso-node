import fs from "fs";

export default class TaskModel {
  listTask(id) {
    const db = fs.readFileSync("./db/db.json", "utf-8");

    const database = JSON.parse(db);

    const task = database.tasks.find((task) => task.id === Number(id));

    return task;
  }
}
