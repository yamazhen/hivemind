import mongoose from "mongoose";

const votesSchema = new mongoose.Schema(
  {
    targetId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    targetType: {
      type: String,
      enum: ["Post", "Comment"],
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    voteType: {
      type: String,
      enum: ["like", "dislike"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

votesSchema.index({ targetId: 1, targetType: 1, userId: 1 }, { unique: true });

const Votes = mongoose.model("Votes", votesSchema);
export default Votes;
