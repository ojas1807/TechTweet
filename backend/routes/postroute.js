import { Router } from "express";
import Post from "../models/post.js";
import mongoose from "mongoose";
import User from "../models/user.js";
const postRouter = Router();

// postRouter.get("/", async (req, res) => {
//   const post = await Post.find();

//   res.json(post);
// });

postRouter.get("/", async (req, res) => {
  try {
    const { user_id } = req.query;  

    // Fetch all posts
    const posts = await Post.find();
    //now i want to sort the post based on most likes and new posts

    const algopost=posts.sort((a, b) => {
      if (a.likes === b.likes) {
        return b.createdAt - a.createdAt;
      }
      return b.likes - a.likes;
    });

res.json(algopost);

  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
});


 







postRouter.post("/create", async (req, res) => {
  try {
    const { caption, type, tags, photos, user_id } = req.body;

    // Create a new post
    const newPost = new Post({
      photos,
      caption,
      type,
      tags,
      user_id,
    });

    // Save the post to the database
    await newPost.save();

    // Find the user by user_id (ensure to await this)
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add the post to the user's posts array
    user.posts.push(newPost._id);

    // Save the updated user
    await user.save();

    // Respond with the newly created post
    res.json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error: error.message });
  }
});


postRouter.patch("/update/:id", async (req, res) => {
  const { caption, type, tags, photos, comments } = req.body;
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
  try {
    const { id } = req.params;
    const { user_id } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "No post with that id" });
    }

    // Find the post by ID
    const post = await Post.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    } 

    // Check if the post is already liked by the user
    if (post.liked_by.includes(user_id)) {
      return res.status(400).json({ message: "Post already liked" });
    }

    // Increment likes and add user to liked_by array
    post.likes += 1;
    post.liked_by.push(user_id);
    await post.save();

    // Find the user and check if they exist
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add the post to the user's liked_post array
    user.liked_post.push(post._id);
    await user.save();

    res.json("Post liked successfully");
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
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
  if (!post.liked_by.includes(req.body.user_id)) {
    return res.status(400).json({ message: "Post not liked" });
  }
  if(post.likes<=0){
    return res.status(400).json({ message: "Post not liked" });
  }
  post.likes -= 1;
  await post.liked_by.pull(req.body.user_id);

  await post.save();
  await User.findById(req.body.user_id).then((user) => {
    user.liked_post.pull(post._id);
    user.save();
  });

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
});

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
