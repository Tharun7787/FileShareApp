import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async () => {
  const USERNAME = process.env.DB_USERNAME;
  const PASSWORD = process.env.DB_PASSWORD;
  console.log("Connecting DB...");
  const MONGO_URI = "mongodb://0.0.0.0:27017";
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error.message);
  }
};

export default DBConnection;
