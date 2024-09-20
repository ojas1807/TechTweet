import { Router } from "express";
import mongoose from "mongoose";
import User from "../models/user.js";
import Project from "../models/project.js";
const projectRouter = Router();

projectRouter.get("/", async (req, res) => {
  const post = await Project.find();
  res.json(post);
});

export default projectRouter;
