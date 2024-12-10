import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("DB Connected.");
  } catch (err) {
    console.log(err);
  }
};

export default dbConnect;
