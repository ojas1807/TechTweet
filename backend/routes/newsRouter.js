import { Router } from "express";
import Post from "../models/post.js";
import mongoose from "mongoose";
import User from "../models/user.js";
import {
  commentNews,
  deleteNews,
  getNews,
  newsCreation,
  specificNews,
  updateNews,
} from "../controllers/news.js";

const newsRouter = Router();

newsRouter.get("/", getNews);

newsRouter.post("/create", newsCreation);

newsRouter.delete("/delete/:id", deleteNews);

newsRouter.post("/comment/:id", commentNews);

newsRouter.patch("/update/:id", updateNews);

newsRouter.get("/getNews/:id", specificNews);

export default newsRouter;
