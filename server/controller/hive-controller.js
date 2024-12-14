import Hive from "../model/hive-model.js";
import asyncHandler from "express-async-handler";
import User from "../model/user-model.js";

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
    console.log(`Hive ${name} created`);
    const user = await User.findById(creatorId);
    if (user) {
      user.joinedHives.push(savedHive._id);
      await user.save();
    }

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

const visitHive = asyncHandler(async (req, res) => {
  const { hiveId } = req.params;
  const userId = req.user._id;

  const hive = await Hive.findById(hiveId);
  if (!hive) {
    return res.status(404).json({ message: "Hive not found" });
  }

  const existingVisit = hive.visits.find(
    (visit) => visit.userId.toString() === userId.toString(),
  );

  if (existingVisit) {
    existingVisit.lastVisited = new Date();
  } else {
    hive.visits.push({ userId, lastVisited: new Date() });
  }

  await hive.save();

  res.status(200).json({ message: "Visit updated successfully", hive });
});

const getHive = async (req, res) => {
  const { hiveId } = req.params;

  const hive = await Hive.findById(hiveId);

  if (!hive) {
    return res.status(404).json({ message: "Hive not found" });
  }

  res.status(200).json({
    success: true,
    hive,
  });
};

export { createHive, getAllHives, getMyHives, visitHive, getHive };
