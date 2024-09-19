import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";

const app = express();
configDotenv();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
