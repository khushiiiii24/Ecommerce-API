import {Router} from "express";
import { addProduct, getAllProducts, getSingleProducts } from "../controllers/productControllers.js";
import { uploadCloud } from "../middleware/cloudinaryUpload.js";

const productRouter=Router()
productRouter.post("/productAdd",addProduct)
productRouter.get("/getAllProduct",getAllProducts)
productRouter.get("/getSingleProduct/:id",uploadCloud.single("image"),getSingleProducts)
export default productRouter