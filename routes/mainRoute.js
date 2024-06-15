import express from "express";
import { EventEmitter } from "events";
import { getMainPage, createUser, loginUser, createHive, createPost, logoutUser, getSettingPage, updateUser, deleteUser, updatePost, deletePost, updateHive, deleteHive, getEditPost, getEditHive } from "../controllers/mainController.js"
import authMiddleware from "../middlware/auth.js"

// added to increase the amount of routes
EventEmitter.defaultMaxListeners = 20;

const router = express.Router();

router.use(authMiddleware);

router.route("/").get(getMainPage).post(loginUser);
router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/create").post(createHive);
router.route("/createpost").post(createPost);
router.route("/logout").get(logoutUser);
router.route("/settings").get(getSettingPage);
router.route("/settings/user/:id").put(updateUser).delete(deleteUser);
router.route("/settings/post/:id").get(getEditPost).put(updatePost).delete(deletePost);
router.route("/settings/hive/:id").get(getEditHive).put(updateHive).delete(deleteHive);

export default router;
