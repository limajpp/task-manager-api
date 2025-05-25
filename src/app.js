import express from "express";
import cors from "cors";
import dbConnect from "./config/dbConnection.js";
import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();
app.use(cors(), express.json());
dbConnect();

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Task Manager API");
});

app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} not found...` });
});

export default app;
