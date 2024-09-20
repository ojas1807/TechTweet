import mongoose from "mongoose";
import { postRef, userRef } from "../utils/strings.js";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    profile_pic: { type: String, default: "" },
    about: { type: String, default: "" },
    posts: [{ type: mongoose.Schema.ObjectId, ref: postRef }],
    liked_post: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const User = mongoose.model(userRef, userSchema);
export default User;
