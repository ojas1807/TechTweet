import mongoose from "mongoose";
import { postRef, userRef } from "../utils/strings.js";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  profile_pic: { type: String, default: "" },
  about: { type: String },
  posts: [{ type: mongoose.Schema.ObjectId, ref: postRef }],
});

const User = mongoose.model(userRef, userSchema);
export default User;