import { Router } from "express";
import { addUser } from "../controllers/registerControllers.js";
const registerRouter=Router()
registerRouter.post("/userAdd",addUser)
export default registerRouter
