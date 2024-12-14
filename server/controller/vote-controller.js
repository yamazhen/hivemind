import asyncHandler from "express-async-handler";
import Votes from "../model/vote-model.js";

const handleVote = asyncHandler(async (req, res) => {
  const { targetId, targetType, userId, voteType } = req.body;

  if (!["Post", "Comment"].includes(targetType)) {
    return res.status(400).json({ message: "Invalid target type" });
  }

  if (!["like", "dislike"].includes(voteType)) {
    return res.status(400).json({ message: "Invalid vote type" });
  }

  const existingVote = await Votes.findOne({ targetId, targetType, userId });

  if (existingVote) {
    if (existingVote.voteType === voteType) {
      await Votes.deleteOne({ _id: existingVote._id });
      return res.status(200).json({ message: "Vote removed" });
    }

    existingVote.voteType = voteType;
    await existingVote.save();
    return res
      .status(200)
      .json({ message: "Vote updated", vote: existingVote });
  }

  const newVote = await Votes.create({
    targetId,
    targetType,
    userId,
    voteType,
  });
  res.status(201).json({ message: "Vote added", vote: newVote });
});

const countVotes = asyncHandler(async (req, res) => {
  const { targetId, targetType } = req.params;

  const likes = await Votes.countDocuments({
    targetId,
    targetType,
    voteType: "like",
  });
  const dislikes = await Votes.countDocuments({
    targetId,
    targetType,
    voteType: "dislike",
  });

  res.status(200).json({ netVotes: likes - dislikes });
});

export { handleVote, countVotes };
