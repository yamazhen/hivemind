import express from "express";
import { handleVote, countVotes } from "../controller/vote-controller.js";
import { protect } from "../config/auth.js";

const router = express.Router();

router.post("/vote", protect, handleVote);
router.get("/:targetType/:targetId", protect, countVotes);

export default router;
