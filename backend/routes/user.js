import { Router } from "express";
import User from "../models/user.js";

const userRouter = Router();

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send("Missing required fields");
  }
  try {
    const currentUser = await User.findOne({ email });
    if (!currentUser) {
      return res.status(404).send("User not found");
    }
    if (currentUser.password == password) {
      return res.status(200).send("Login Successful - " + currentUser._id);
    }
  } catch (err) {
    return res.status(501).send("An error occurred " + err);
  }
});

userRouter.post("/register", async (req, res) => {
  const { name, email, password, phone, profile_pic, about } = req.body;
  if ((!name || !email || !password, !phone)) {
    return res.status(402).send("Missing required fields");
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send("User already exists");
    }
    const user = User({ name, email, password, phone, profile_pic, about });
    if (!user) {
      return res.status(422).send("Error registering user. Try Again!");
    }
    user.save();
    return res.status(200).send("User registered successfully! - " + user._id);
  } catch (err) {
    return res.status(409).send("An error occurred!");
  }
});

userRouter.patch("/update/:id", async (req, res) => {
  const { ...unwantedData } = req.body;
  const id = req.params;
  //   console.log(name, password, phone, about);
  try {
    await User.updateOne({ id }, { unwantedData });
    return res.status(200).send("User updated - " + id);
  } catch (err) {
    console.log(err);
    return res.status(501).send(err);
  }
});

userRouter.delete("/delete/:id", (req, res) => {
  const _id = req.params;
  try {
    User.deleteOne({ _id });
    return res.status(200).send("User deleted! - " + _id);
  } catch (err) {
    return res.status(501).send("An error occurred!");
  }
});

export default userRouter;
