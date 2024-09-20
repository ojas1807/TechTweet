import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.json("List of users");
});
export default userRouter;
