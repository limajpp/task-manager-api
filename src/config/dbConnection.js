import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = async function () {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("Database connection is successfully established!");
  } catch (error) {
    console.error(`Failed to establish connection with database, ${error}`);
  }
};

export default dbConnect;
