import mongoose from "mongoose";
const LoginSchema= new mongoose.Schema({
    email: {
    type: String,
  },
  
  password: {
    type: String,
  }
},{timestamps:true})
const LoginModel= mongoose.model("login",LoginSchema)
export default LoginModel