import { Router } from "express";
import { loginUser } from "../controllers/loginControllers.js";
// import registerRouter from "./registerRouter";
import { registerUser } from "../controllers/registerControllers.js";
const userRouter=Router();
userRouter.post("/login",loginUser)
userRouter.post("/register",registerUser)
export default userRouter