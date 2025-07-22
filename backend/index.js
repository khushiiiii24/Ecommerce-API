import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "dotenv/config"
import connectToDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import registerRouter from "./routes/registerRouter.js";
import loginRouter from "./routes/loginRoutes.js";

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
app.use("/products",productRouter);
app.use("/register",registerRouter)
app.use("/login",loginRouter)
app.listen(port,()=>{
    console.log(`server is started at port ${port}`);
    
})