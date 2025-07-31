import { Router } from "express";
import cartProducts from "../controllers/cartControllers.js";

const cartRouter = Router();

/**
 * @swagger
 * /cart/{id}:
 *   post:
 *     summary: Add or update a product in the cart
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID to be added or updated in the cart
 *     responses:
 *       200:
 *         description: Product added/updated in cart successfully
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 */
cartRouter.post("/:id", cartProducts);

export default cartRouter;
