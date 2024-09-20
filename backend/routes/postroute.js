import { Router } from "express";
import Post from "../models/post.js";
import mongoose from "mongoose";
import User from "../models/user.js";
const postRouter = Router();

postRouter.get("/", async (req, res) => {
  const post = await Post.find();
  res.json(post);
});

postRouter.post("/create", async (req, res) => {
  const { caption, type, tags, photos, user_id } = req.body;

    const newPost = new Post({
        photos,
        caption,
        type,
        tags,
        user_id,

    });

  await newPost.save();

  res.json(newPost);
});

postRouter.patch("/update/:id", async (req, res) => {
    const { caption, type, tags, photos,comments } = req.body;
    const { id } = req.params;
     
    if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({ message: "No post with that id" });
     }
     
     const post = await Post.findById(id);
     if (!post) {
      return res.status(404).json({ message: "Post not found" });
     }
    
    post.photos = photos;
    post.caption = caption;
    post.type = type;
    post.tags = tags;
   

    
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
});

postRouter.post("/like/:id", async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No post with that id" });
  }

  const post = await Post.findById(id);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  if (post.liked_by.includes(req.body.user_id)) {
    return res.status(400).json({ message: "Post already liked" });
  }
  post.likes += 1;
  await post.liked_by.push(req.body.user_id);

  await post.save();
  await User.findById(req.body.user_id).then((user) => {
    user.liked_post.push(post._id);
    user.save();
  });

    res.json("Post liked successfully");


 



    });

postRouter.post("/unlike/:id", async (req, res) => {
    const { id } = req.params;
    const { user_id } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({ message: "No post with that id" });
    }
    
    const post = await Post.findById(id);
    if (!post) {
     return res.status(404).json({ message: "Post not found" });
    }
    if(!post.liked_by.includes(req.body.user_id)){
        return res.status(400).json({ message: "Post not liked" });
    }   
    post.likes -= 1;
    await post.liked_by.pull(req.body.user_id);
    
    await post.save();
    await User.findById(req.body.user_id).then((user) => {
        user.liked_post.pull(post._id);
        user.save();
    })

    res.json("Post unliked successfully");

    });

postRouter.post("/comment/:id", async (req, res) => {
    const { id } = req.params;
    const { user_id, comment } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({ message: "No post with that id" });
    }
    
    const post = await Post.findById(id);
    if (!post) {
     return res.status(404).json({ message: "Post not found" });
    }
    post.comments.push({ user_id, comment });
    await post.save();
    res.json("Comment added successfully");
    
})    

postRouter.get("/getpostbyId/:id", async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({ message: "No post with that id" });
    }
    
    const post = await Post.findById(id);
    if (!post) {
     return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);

});
    
export default postRouter;
