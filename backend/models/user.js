import mongoose from "mongoose";
import { userRef } from "../utils/strings";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  password: { type: String, required: true },
  profile_pic: { type: String, required: true, default: "" },
  about: { type: String },
  posts: [{ type: mongoose.Schema.ObjectId }],
});

const User = mongoose.model(userRef, userSchema);
export default User;
