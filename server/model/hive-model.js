import mongoose from "mongoose";

const visitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  lastVisited: {
    type: Date,
    default: Date.now,
  },
});

const hiveSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    profilePic: {
      type: String,
    },
    bannerPic: {
      type: String,
    },
    visits: [visitSchema],
  },
  {
    timestamps: true,
  },
);

const Hive = mongoose.model("Hive", hiveSchema);
export default Hive;
