import { Router } from "express";
import { checkLogin } from "../controllers/loginControllers.js";
const loginRouter=Router()
loginRouter.post("/checklogin",checkLogin)
export default loginRouter