import mongoose from "mongoose";

const dbConnect = async function () {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("A database connection is successfully established!");
  } catch (error) {
    console.error("Failed to establish connection with database...");
  }
};

export default dbConnect;
