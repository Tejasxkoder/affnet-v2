import { Router } from "express"
import { signinController, signupController } from "../controllers/admin.controller.js";
const adminRouter = Router();

// console.log("User router loaded");

// adminRouter.get("/test", (req, res) => {
//   res.send("User router working");
// });

adminRouter.post("/signup", signupController);
adminRouter.post("/signin", signinController);

export default adminRouter;
