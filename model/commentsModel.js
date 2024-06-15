import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema
(
  {
    post_id:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    user_id:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comment:
    {
      type: String,
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
  },
  {
    timestamps: true,
  }
);
const Comments = mongoose.model("Comments", commentsSchema);
export default Comments;
