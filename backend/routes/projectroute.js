import { Router } from "express";
import mongoose from "mongoose";
import User from "../models/user.js";
import Project from "../models/project.js";
const projectRouter = Router();

projectRouter.get("/", async(req, res) => {
    
    const post =await Project.find();
    res.json(post); 

})

projectRouter.post("/create", async(req, res) => {
    const { projectTitle, projectDescription, tags,likes, comments,techstack, workflow } = req.body;

    const newProject = new Project({
        projectTitle,
        projectDescription,
        tags,
        likes,
        comments,//danger here     
        techstack,
        workflow 
    }); 
if(!newProject){
    return res.status(400).json({message:"project not created"});
}
    await newProject.save();

    res.json(newProject);

})

export default projectRouter;