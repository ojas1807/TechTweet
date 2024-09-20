import { Router } from "express";
import mongoose from "mongoose";
import User from "../models/user.js";
import Project from "../models/project.js";
import postRouter from "./postroute.js";
const projectRouter = Router();

projectRouter.get("/", async (req, res) => {
  const post = await Project.find();
  res.json(post);
});

projectRouter.post("/getproject/:id", async (req, res) => {
  const { project_id } = req.body;
  const post = await Project.findById(project_id);

  res.json(post);
});

projectRouter.post("/create", async (req, res) => {
  const {
    projectTitle,
    projectDescription,
    tags,
    techstack,
    workflow,
    user_id,
    github_link,
  } = req.body;
  const newProject = new Project({
    projectTitle,
    projectDescription,
    tags,
    techstack,
    workflow,
    user_id,
    github_link,
  });
  await newProject.save();
  res.json(newProject);
});

projectRouter.patch("/update/:id", async (req, res) => {
  const {
    projectTitle,
    projectDescription,
    tags,
    techstack,
    workflow,
    github_link,
  } = req.body;
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No post with that id" });
  }
  const post = await Project.findById(id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  post.projectTitle = projectTitle;
  post.projectDescription = projectDescription;
  post.tags = tags;
  post.techstack = techstack;
  post.workflow = workflow;
  post.github_link = github_link;

  await post.save();
  res.json(post);
});

projectRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No post with that id" });
  }
  const project = await Project.findById(id);
  await project.deleteOne();

  res.json({ message: "Post deleted successfully" });
});

projectRouter.post("/like/:id", async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No post with that id" });
  }

  const porj = await Project.findById(id);
  if (!porj) {
    return res.status(404).json({ message: "Post not found" });
  }

  if (porj.liked_by.includes(req.body.user_id)) {
    return res.status(400).json({ message: "Post already liked" });
  }

  porj.likes += 1;
  porj.liked_by.push(req.body.user_id);

  await porj.save();

  res.json("Post liked successfully");
});

projectRouter.post("/unlike/:id", async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No project with that id" });
  }

  const proj = await Project.findById(id);
  if (!proj) {
    return res.status(404).json({ message: "Post not found" });
  }
  if (!proj.liked_by.includes(req.body.user_id)) {
    return res.status(400).json({ message: "Project not liked" });
  }
  proj.likes -= 1;
  await proj.liked_by.pull(req.body.user_id);

  await proj.save();

  res.json("Post unliked successfully");
});

projectRouter.post("/comment/:id", async (req, res) => {
  const { id } = req.params;
  const { user_id, comment } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No post with that id" });
  }

  const post = await Project.findById(id);
  if (!post) {
    return res.status(404).json({ message: "Project not found" });
  }
  post.comments.push({ user_id, comment });
  await post.save();
  res.json("Comment added successfully");
});

export default projectRouter;
