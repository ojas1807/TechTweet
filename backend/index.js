import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { configDotenv } from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import userRouter from "./routes/user.js";
import postRouter from "./routes/postroute.js";

const app = express();
app.use(express.json());
configDotenv();
const port = process.env.PORT || 3000;
cloudinary.config({
  cloud_name: "dqeuyazh4",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
});

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  }); 
  app.use("/user", userRouter);
  app.use("/post",postRouter);
  
  // app.use("/user", userRouter);
  
  app.post("/upload", async (req, res) => {
    // Use the uploaded file's name as the asset's public ID and
    // allow overwriting the asset with new versions
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    try {
      const result = await cloudinary.uploader.upload(req.body.image, options);
      console.log(result);
      res.json(result.url);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error uploading image" });
    }
  });

  app.post("/uploadany", async (req, res) => {
    console.log("requsest came here ");
    const toupload = req.body.file;
    try {
      const result = await cloudinary.uploader.upload(toupload);
      console.log(result);
      res.json(result.url);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error uploading file" });
    }
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
