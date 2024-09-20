import mongoose, { mongo } from "mongoose";
import { postRef, userRef } from "../utils/strings.js";

const postSchema = mongoose.Schema({
  
  photos: [{ type: String }],
  caption: { type: String },
  type: { type: String, default: "post" },
  tags: [{ type: String }],
  likes: { type: Number, default: 0 },
  user_id: { type: mongoose.Schema.ObjectId, ref: userRef },
});

const Post = mongoose.model(postRef, postSchema);
export default Post;
