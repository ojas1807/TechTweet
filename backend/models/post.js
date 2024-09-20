import mongoose, { mongo } from "mongoose";
import { postRef } from "../utils/strings";

const postSchema = mongoose.Schema({
  photos: [{ type: String }],
  caption: { type: String },
  type: { type: String, default: "post" },
});

const Post = mongoose.model(postRef, postSchema);
export default Post;
