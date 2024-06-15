import mongoose from "mongoose";

const postSchema = new mongoose.Schema
(
  {
    title:
    {
      type: String,
      required: true,
    },
    content:
    {
      type: String,
    },
    text:
    {
      type: String,
      required: true,
    },
    user_id:
    {
      type:mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    hive_id:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hive",
      required: true,
    },
    likes:
    {
      type: Number,
      default: 0,
    },
    dislikes:
    {
      type: Number,
      default: 0,
    },
    commentscount:
    {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("Post", postSchema);
export default Post;
