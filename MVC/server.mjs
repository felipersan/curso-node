import Express from "express";
import taskRouter from "./routes/taskRouter.mjs";

const app = new Express();
app.use(Express.json())

app.use("/api", taskRouter);

app.listen(3000, () => {
  console.log("App rodando na porta 3000");
});
