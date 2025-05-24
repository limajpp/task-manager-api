import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors(), express.json());

app.use("/api/users/", userRoutes);

app.get("/", (req, res) => {
  res.send("Task Manager API");
});

app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} not found...` });
});

export default app;
