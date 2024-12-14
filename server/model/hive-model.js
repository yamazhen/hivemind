import mongoose from "mongoose";

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
  },
  {
    timestamps: true,
  },
);

const Hive = mongoose.model("Hive", hiveSchema);
export default Hive;
