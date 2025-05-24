import mongoose from "mongoose";
import hashPassword from "../utils/passwordUtils.js";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minLength: 2 },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 30,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await hashPassword(this.password);
    next();
  } catch (error) {
    console.error(`Failed to hash given password, ${error.messsage}`);
    next(error);
  }
});

export default mongoose.model("User", userSchema, "users");
