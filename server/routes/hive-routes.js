import express from "express";
import {
  createHive,
  getMyHives,
  getAllHives,
  visitHive,
  getHive,
} from "../controller/hive-controller.js";
import { protect } from "../config/auth.js";

const router = express.Router();

router.post("/create", protect, createHive);
router.get("/getAll", getAllHives);
router.get("/getMyHives", protect, getMyHives);
router.get("/visit/:hiveId", protect, visitHive);
router.get("/getHive/:hiveId", getHive);

export default router;
