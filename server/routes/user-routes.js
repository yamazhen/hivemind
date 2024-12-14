import express from "express";
import {
  createUser,
  getAllUsers,
  getUserProfile,
  performLogin,
} from "../controller/user-controller.js";
import { protect } from "../config/auth.js";

const router = express.Router();

router.post("/signup", createUser);
router.get("/getallusers", getAllUsers);
router.post("/login", performLogin);
router.get("/me", protect, getUserProfile);

export default router;
