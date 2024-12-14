import asyncHandler from "express-async-handler";
import User from "../model/user-model.js";
import jwt from "jsonwebtoken";

const createUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    username,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
    });
    console.log(`User ${user.username} created`);
  } else {
    res.status(400);
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}, "username _id");

  if (!users) {
    res.status(404);
    throw new Error("No users found");
  }

  res.status(200).json(users);
});

const performLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const errorMsg = "Invalid username or password";

  const user = await User.findOne({ username });
  if (!user) {
    res.status(401);
    throw new Error(errorMsg);
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    res.status(401);
    throw new Error(errorMsg);
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({
    _id: user._id,
    username: user.username,
    token,
  });
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

const getJoinedHives = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const user = await User.findById(userId).populate("joinedHives");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json({
    joinedHives: user.joinedHives,
  });
});

export {
  createUser,
  getAllUsers,
  performLogin,
  getUserProfile,
  getJoinedHives,
};
