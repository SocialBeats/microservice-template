import mongoose from "mongoose";
import logger from "../logger.js";


export const connectDB = async () => {
  try {
    const mongoUser = process.env.MONGOADMIN;
    const mongoPass = process.env.MONGOPASS;
    let mongoUrl = process.env.MONGOURL;

    // if no MONGOURL, skip connection
    if (!mongoUrl) {
      logger.warn("No MONGOURL provided — skipping MongoDB connection");
      return;
    }
    // if auth credentials are provided, replace placeholders
    if (mongoUrl.includes("ADMIN") && mongoUrl.includes("PASS")) {
      mongoUrl = mongoUrl
        .replace("ADMIN", mongoUser || "")
        .replace("PASS", mongoPass || "");
    }

    await mongoose.connect(mongoUrl);
    logger.info("MongoDB connected successfully");
  } catch (err) {
    logger.error(`MongoDB connection error: ${err.message}`);
    // don't kill process in development/test mode
    if (process.env.NODE_ENV === "production") {
      process.exit(1);
    } else {
      logger.warn("Running without database (development/test mode)");
    }
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
