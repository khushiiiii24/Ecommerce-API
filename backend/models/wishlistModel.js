import mongoose from "mongoose";
const wishlistSchema=new mongoose.Schema({
     product:{
            type:mongoose.Schema.Types.ObjectId,
            
        }
},{timestamps:true})
const wishlistModel= mongoose.model("wishlist",wishlistSchema)
export default wishlistModel