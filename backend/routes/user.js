import { Router } from "express";
import User from "../models/user.js";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.json("List of users");
});
userRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(402).send("Missing required fields");
  }
  try {
    const currentUser = User.findOne({ email });
    if (!currentUser) {
      return res.status(404).send("User not found");
    }
    if (currentUser.password == password) {
      return res.status(200).send("Login Successful");
    }
  } catch (err) {
    return res.status(501).send("An error occurred " + err);
  }
});
export default userRouter;
