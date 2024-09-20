import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { configDotenv } from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import userRouter from "./routes/user.js";
import postRouter from "./routes/postroute.js";
import projectRouter from "./routes/projectroute.js";
import newsRouter from "./routes/newsRouter.js";
import multer from 'multer';

const app = express();
app.use(express.json());
app.use(cors());
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
  app.use("/post", postRouter);
  app.use("/project", projectRouter);
  app.use("/news", newsRouter);

  // app.use("/user", userRouter);


//   app.post("/upload", async (req, res) => {
//     const options = {
//         use_filename: true,
//         unique_filename: false,
//         overwrite: true,
//     };

//     try {
//         const result = await cloudinary.uploader.upload(req.body.image, options);
//         console.log(result);
//         res.json(result.secure_url); // Return the secure URL of the uploaded image
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Error uploading image" });
//     }
// });





// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  

    try {
        if (!req.file) {
            return res.status(400).json({ error: "File not found" });
        }

        const result = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            );

            uploadStream.end(req.file.buffer);
        });

        return res.status(200).json({
            publicId: result.public_id,
            secureUrl: result.secure_url, // Return the secure URL as well
        });

    } catch (error) {
        console.error("Upload image failed", error);
        return res.status(500).json({ error: "Upload image failed" });
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
