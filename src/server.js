import dotenv from "dotenv";
import app from "./app.js";
import dbConnect from "./config/dbConnection.js";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Started and listening on port ${PORT}...`);
});

app.get("/", (req, res) => {
  res.send("Task Manager API!");
});

dbConnect();
