import {Router} from "express";
import { addProduct } from "../controllers/productControllers.js";

const productRouter=Router()
productRouter.post("/productAdd",addProduct)
export default productRouter