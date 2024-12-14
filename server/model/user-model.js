import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      validate: {
        validator: function (value) {
          return (
            value === null ||
            (typeof value === "string" && validator.isEmail(value))
          );
        },
        message: "Expected a string or null for email",
      },
    },
    avatar: {
      type: String,
    },
    joinedHives: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hive",
      },
    ],
  },
  {
    timestamps: true,
  },
);

// check if password is the same as the hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// encrypt the password and save it
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
export default User;
