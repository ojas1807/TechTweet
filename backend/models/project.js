import mongoose from "mongoose";
import { projectRef } from "../utils/strings.js";


const projectSchema = mongoose.Schema({
  projectTitle: { type: String, required: true },
  projectDescription: { type: String, required: true },
  tags: [{ type: String }],
  likes: { type: Number, default: 0 },
  comments: [{ type: String }],
  techstack:[{type:String}],
  workflow:{type:String},
});

const Project = mongoose.model(projectRef, projectSchema);
export default Project;
