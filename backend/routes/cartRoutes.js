import { Router } from "express";
import cartProducts from "../controllers/cartControllers.js";
const cartRouter=Router();
cartRouter.post("/:id",cartProducts);
export default cartRouter