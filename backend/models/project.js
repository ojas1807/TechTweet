import mongoose from "mongoose";
import { projectRef, userRef } from "../utils/strings.js";

const projectSchema = mongoose.Schema(
  {
    projectTitle: { type: String, required: true },
    projectDescription: { type: String, required: true },
    github_link: { type: String, default: "" },
    user_id: { type: mongoose.Schema.ObjectId, ref: userRef },
    tags: [{ type: String }],
    likes: { type: Number, default: 0 },
    liked_by: [{ type: mongoose.Schema.Types.ObjectId, ref: userRef }],
    comments: [
      {
        comment: { type: String },
        user: { type: mongoose.Schema.Types.ObjectId, ref: userRef },
      },
    ],
    techstack: [{ type: String }],
    workflow: { type: String },
  },
  { timestamps: true }
);

const Project = mongoose.model(projectRef, projectSchema);
export default Project;
