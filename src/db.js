import mongoose from "mongoose";
import logger from "../logger.js";

const mongoUser = process.env.MONGOADMIN;
const mongoPass = process.env.MONGOPASS;
const mongoUrl = process.env.MONGOURL;

const connectionString = mongoUrl
  .replace("ADMIN", mongoUser)
  .replace("PASS", mongoPass);

export const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);
    logger.info("MongoDB connected successfully");
  } catch (err) {
    logger.error(`MongoDB connection error: ${err.message}`);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
  try {
    await mongoose.disconnect();
    logger.info("MongoDB disconnected successfully");
  } catch (err) {
    logger.error(`MongoDB disconnection error: ${err.message}`);
  }
};