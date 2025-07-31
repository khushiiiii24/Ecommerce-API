import { Router } from "express";
import { loginUser } from "../controllers/loginControllers.js";
import { registerUser } from "../controllers/registerControllers.js";

const userRouter = Router();

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User login
 *     consumes:
 *       - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "securePassword123"
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 */
userRouter.post("/login", loginUser);

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: User registration
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
 *                 example: "Khushi Sogani"
 *               email:
 *                 type: string
 *                 example: "khushi@example.com"
 *               password:
 *                 type: string
 *                 example: "myStrongPassword"
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists
 */
userRouter.post("/register", registerUser);

export default userRouter;
