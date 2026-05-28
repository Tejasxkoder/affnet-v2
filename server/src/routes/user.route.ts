import { Router } from "express"
import { signupController } from "../controllers/user.controller.js";
const userRouter = Router();

console.log("User router loaded");

userRouter.get("/test", (req, res) => {
  res.send("User router working");
});

userRouter.post("/signup", signupController);

export default userRouter;
