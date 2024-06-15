import mongoose from "mongoose";

const hiveSchema = new mongoose.Schema
(
  {
    hive_name:
    {
      type: String,
      required: true,
    },
    hive_desc:
    {
      type: String,
    },
    hive_creator:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Hive = mongoose.model("Hive", hiveSchema);
export default Hive;
