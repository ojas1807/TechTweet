import { Router } from "express";
import Post from "../models/post.js";
import mongoose from "mongoose";
const postRouter = Router();

postRouter.get("/", async(req, res) => {
   
    const post =await Post.find();
    res.json(post); 

});

postRouter.post("/create", async(req, res) => {
    const { caption, type, tags, photos,user_id } = req.body;

    const newPost = new Post({
        user_id,
        caption,
        type,
        tags,
        photos
    });

    await newPost.save();

    res.json(newPost);

})

postRouter.patch("/update/:id", async (req, res) => {
    const { caption, type, tags, photos } = req.body;
    const { id } = req.params;
     
    if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({ message: "No post with that id" });
     }
     
     const post = await Post.findById(id);
     if (!post) {
      return res.status(404).json({ message: "Post not found" });
     }
    
    post.caption = caption;
    post.type = type;
    post.tags = tags;
    post.photos = photos;
    
     await post.save();
     res.json(post);
    });
    

postRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({ message: "No post with that id" });
    }
    
    const post = await Post.findById(id);
    if (!post) {
     return res.status(404).json({ message: "Post not found" });
    }
    // Delete the post 
    await post.deleteOne();
    res.json({ message: "Post deleted successfully" });
}
);
export default postRouter;