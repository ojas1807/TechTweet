import { Router } from "express";
import Post from "../models/post.js";
import mongoose from "mongoose";
import User from "../models/user.js";
import News from "../models/news.js";
const newsRouter = Router(); 

newsRouter.get("/", async (req, res) => {
  try {
    const posts = await News.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



newsRouter.post("/create", async (req, res) => {
    const {  headline,
        description,
        image,
        url, } = req.body;
    const newPost = new News({
        headline,
        description,
        image,
        url,
   
    });
    try {
        const post = await newPost.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    });

 
    newsRouter.delete("/delete/:id", async (req, res) => {
        const { id } = req.params;
        
        // Validate the ID format
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ message: "Invalid news ID" });
        }
      
        try {
          // Check if the news item exists
          const newsItem = await News.findById(id);
          if (!newsItem) {
            return res.status(404).json({ message: "News not found" });
          }
      
          console.log("Deleting news item:", newsItem); // Log the news item
      
          // Delete the news by ID
          await News.findByIdAndDelete(id);
          
          res.json({ message: "News deleted successfully" });
        } catch (error) {
          console.error("Error during deletion:", error); // Log the error
          res.status(500).json({ message: "Error deleting the news" });
        }
      });
      

      newsRouter.post("/comment/:id", async (req, res) => {
        const { id } = req.params;
        const { user_id, comment } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(404).json({ message: "No post with that id" });
        }
      
        const post = await News.findById(id);
        if (!post) {
          return res.status(404).json({ message: "Post not found" });
        }
       
        post.comments.push({ comment, user_id: user_id });
        await post.save();
        res.json("Comment added successfully");
    
    });
      
newsRouter.patch("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { headline, description, image, url } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No news with that id" });
    }
  
    const updatedPost = { headline, description, image, url, _id: id };
    await News.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
  });
      
    newsRouter.get("/getNews/:id", async (req, res) => {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "No news with that id" });
        }
    
        const post = await News.findById(id);
        if (!post) {
        return res.status(404).json({ message: "No news with that id" });
        }
        
        res.json(post);
    })























  export default newsRouter;  