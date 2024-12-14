import Hive from "../model/hive-model.js";
import asyncHandler from "express-async-handler";

const createHive = asyncHandler(async (req, res) => {
  const { name, desc, profilePic } = req.body;
  const creatorId = req.user.id;
  const newHive = new Hive({
    name,
    desc: desc || "",
    profilePic: profilePic || "",
    creator: creatorId,
  });
  const savedHive = await newHive.save();

  if (savedHive) {
    return res.status(201).json({
      hive: savedHive,
    });
  }
});

const getAllHives = asyncHandler(async (req, res) => {
  const hives = await Hive.find().populate("creator", "name");
  res.status(200).json({ count: hives.length, hives });
});

const getMyHives = asyncHandler(async (req, res) => {
  const creatorId = req.user.id;

  const hives = await Hive.find({ creator: creatorId }).populate(
    "creator",
    "name",
  );

  res.status(200).json({ count: hives.length, hives });
});

export { createHive, getAllHives, getMyHives };
