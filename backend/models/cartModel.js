import mongoose from "mongoose";
const cartSchema= new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        
    },
    quantity:{
        type:Number,required:true,default:1
    }
},{timestamps:true});
const cartModel= mongoose.model("cart",cartSchema)
export default cartModel