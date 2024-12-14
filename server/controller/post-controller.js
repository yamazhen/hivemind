import asyncHandler from "express-async-handler";
import Post from "../model/post-model.js";
import Votes from "../model/vote-model.js";

const getTopPosts = asyncHandler(async (req, res) => {
  // pagination
  const limit = parseInt(req.query.limit, 10) || 10;
  const page = parseInt(req.query.page, 10) || 1;
  const skip = (page - 1) * limit;

  const aggregationPipeline = [
    {
      $match: { targetType: "Post" },
    },
    {
      $group: {
        _id: "$targetId",
        likes: {
          $sum: {
            $cond: [{ $eq: ["$voteType", "like"] }, 1, 0],
          },
        },
        dislikes: {
          $sum: {
            $cond: [{ $eq: ["$voteType", "dislike"] }, 1, 0],
          },
        },
        netVotes: {
          $sum: {
            $cond: [
              { $eq: ["$voteType", "like"] },
              1,
              { $cond: [{ $eq: ["$voteType", "dislike"] }, -1, 0] },
            ],
          },
        },
      },
    },
    {
      $sort: { netVotes: -1 },
    },
    {
      $skip: skip,
    },
    {
      $limit: limit,
    },
  ];

  const topVotes = await Votes.aggregate(aggregationPipeline);
  if (!topVotes || topVotes.length === 0) {
    return res.status(404).json({ message: "No votes found for any posts." });
  }

  const postIds = topVotes.map((vote) => vote._id);
  const posts = await Post.find({ _id: { $in: postIds } })
    .populate("userId hiveId")
    .lean();

  const postMap = {};
  posts.forEach((post) => {
    postMap[post._id.toString()] = post;
  });

  const topPosts = topVotes
    .map((vote) => {
      const post = postMap[vote._id.toString()];
      if (post) {
        return {
          ...post,
          netVotes: vote.netVotes,
          likes: vote.likes,
          dislikes: vote.dislikes,
        };
      } else {
        return null;
      }
    })
    .filter((post) => post !== null);

  const totalVotes = await Votes.countDocuments({ targetType: "Post" });
  const totalPages = Math.ceil(totalVotes / limit);

  res.status(200).json({
    topPosts,
    pagination: {
      currentPage: page,
      totalPages,
      pageSize: limit,
      totalItems: totalVotes,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  });
});

const createPost = asyncHandler(async (req, res) => {
  const { title, text, image, userId, hiveId } = req.body;

  if (!title || !text || !userId || !hiveId) {
    res.status(400);
    throw new Error("Please provide title, text, userId, and hiveId");
  }

  const post = new Post({
    title,
    text,
    userId,
    hiveId,
  });

  if (image) {
    post.image = image;
  }

  const createdPost = await post.save();

  res.status(201).json(createdPost);
});

export { createPost, getTopPosts };
