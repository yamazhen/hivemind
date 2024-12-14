import express from "express";
import { createPost, getTopPosts } from "../controller/post-controller.js";
import { protect } from "../config/auth.js";

const router = express.Router();

router.post("/create", protect, createPost);
router.get("/top", getTopPosts);

export default router;
