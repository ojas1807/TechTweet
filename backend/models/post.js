import mongoose, { mongo } from "mongoose";
import { postRef, userRef } from "../utils/strings.js";

const postSchema = mongoose.Schema({
  heading: { type: String },
  photos: { type: String },
  caption: { type: String },
  type: { type: String, default: "post" }, 
  tags: [{ type: String }],
  likes: { type: Number, default: 0 },
  user_id: { type: mongoose.Schema.ObjectId, ref: userRef },
  liked_by: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 
  comments: [{ comment: { type: String }, user: { type: mongoose.Schema.Types.ObjectId, ref: userRef } }],
  
},{timestamps:true});

const Post = mongoose.model(postRef, postSchema);
export default Post; 

