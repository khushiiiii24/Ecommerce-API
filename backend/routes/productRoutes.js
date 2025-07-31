import { Router } from "express";
import {
  addProduct,
  getAllProducts,
  getSingleProducts,
} from "../controllers/productControllers.js";
import uploadCloud from "../middleware/cloudinaryUpload.js";

const productRouter = Router();

/**
 * @swagger
 * /products/productAdd:
 *   post:
 *     summary: Add a new product
 *     security:
 *       - cookieAuth: []
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Gold Necklace"
 *               slug:
 *                 type: string
 *                 example: "gold-necklace"
 *               description:
 *                 type: string
 *                 example: "22k gold with intricate design"
 *               category:
 *                 type: string
 *                 example: "Jewelry"
 *               quantity:
 *                 type: number
 *                 example: 10
 *               originalPrice:
 *                 type: number
 *                 example: 2999
 *               discountedPrice:
 *                 type: number
 *                 example: 2499
 *               attributes:
 *                 type: string
 *                 example: "Weight: 10g, Size: Medium"
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Product added successfully
 */
productRouter.post("/productAdd", uploadCloud.single("image"), addProduct);

/**
 * @swagger
 * /products/getAllProduct:
 *   get:
 *     summary: Get all product items
 *     responses:
 *       200:
 *         description: List of product items
 */
productRouter.get("/getAllProduct", getAllProducts);

/**
 * @swagger
 * /products/getSingleProduct/{id}:
 *   get:
 *     summary: Get a single product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product retrieved successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
productRouter.get("/getSingleProduct/:id", getSingleProducts);

export default productRouter;
