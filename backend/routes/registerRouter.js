import { Router } from "express";
import { addUser } from "../controllers/registerControllers.js";
import { uploadCloud } from "../middleware/cloudinaryUpload.js";
const registerRouter=Router()
registerRouter.post("/userAdd",uploadCloud.single("image"),addUser)
export default registerRouter
