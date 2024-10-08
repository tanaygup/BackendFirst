import { Router } from "express";
import RegisterUser from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const userRouter = Router();
console.log("route");

userRouter.route("/register").post(
  upload.fields([
    // using multer middleware before registeruser to store cover image and avatar of user
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  RegisterUser
);

export default userRouter;
