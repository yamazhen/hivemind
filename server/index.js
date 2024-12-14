import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dbConnect from "./config/database.js";
import voteRoutes from "./routes/vote-routes.js";
import userRoutes from "./routes/user-routes.js";
import hiveRoutes from "./routes/hive-routes.js";
import postRoutes from "./routes/post-routes.js";
import cors from "cors";

const app = express();

dbConnect();

const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: "https://zhen-hivemind.me",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  }),
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use("/api/votes", voteRoutes);
app.use("/api/users", userRoutes);
app.use("/api/hives", hiveRoutes);
app.use("/api/posts", postRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(port, () => {
  console.log("Server is running at localhost:" + port);
});
