import { Router } from "express";
import wishlistProducts from "../controllers/wishlistController.js";
const wishlistRouter=Router()
wishlistRouter.post("/:id",wishlistProducts)
export default wishlistRouter