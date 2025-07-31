import { Router } from "express";
import wishlistProducts from "../controllers/wishlistController.js";

const wishlistRouter = Router();

/**
 * @swagger
 * /wishlist/{id}:
 *   post:
 *     summary: Add or manage a product in the wishlist
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID to be added to the wishlist
 *     responses:
 *       200:
 *         description: Product added to wishlist successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
wishlistRouter.post("/:id", wishlistProducts);

export default wishlistRouter;
