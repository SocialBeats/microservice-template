import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from "url";
import logger from "./logger.js";
// import your routes here 
import aboutRoutes from "./src/routes/aboutRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, ".env"), quiet: true });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());

// add your routes here like this:
aboutRoutes(app)

app.listen(PORT, () => {
  logger.warn(`Using log level: ${process.env.LOG_LEVEL}`)
  logger.info(`Server started on port ${PORT}`);
  logger.info(`API running at http://localhost:${PORT}`);
});