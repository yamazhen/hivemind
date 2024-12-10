import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dbConnect from "./config/database.js";

const app = express();

dbConnect();

const port = 80;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(port, () => {
  console.log("Server is running at localhost:" + port);
});
