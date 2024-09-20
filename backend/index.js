import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { configDotenv } from "dotenv";
import userRouter from "./routes/user.js";

const app = express();
configDotenv();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.use("/users", userRouter);

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
