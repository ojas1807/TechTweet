import mongoose, { mongo } from "mongoose";
import { postRef } from "../utils/strings.js";

const postSchema = mongoose.Schema({
  photos: [{ type: String }],
  caption: { type: String },
  type: { type: String, default: "post" },
  tags: [{ type: String }],
});

const Post = mongoose.model(postRef, postSchema);
export default Post;
