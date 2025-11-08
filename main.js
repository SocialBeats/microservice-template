import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});