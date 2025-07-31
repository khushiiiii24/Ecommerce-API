import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "dotenv/config"
import connectToDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import wishlistRouter from "./routes/wishlistRoutes.js";
import userRouter from "./routes/userRoutes.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
dotenv.config();
const app=express();
const port=process.env.port;
await connectToDB()

app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))
app.use("/products",productRouter);
app.use("/user",userRouter)
app.use("/cart",cartRouter);
app.use("/wishlist",wishlistRouter)
app.listen(port,()=>{
    console.log(`server is started at port ${port}`);
    
})