import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
cloudinary.config({
  Cloud_Name: process.env.CLOUDINARY.CLOUD.NAME,
  Cloud_API_KEY: process.env.CLOUDINARY.CLOUD.API_KEY,
  Cloud_API_SECRET: process.env.CLOUDINARY.CLOUD.API_SECRET,
});
export default cloudinary