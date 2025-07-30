import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required:true
    },
    slug: { type: String ,required:true},
    category: {
      type: String,required:true
    },
    image: {
   
      type:String,
      // required:true
    },
    quantity: { type: Number,required:true },
    originalPrice: { type: Number ,required:true},
    discountedPrice: { type: Number ,required:true},
    description: { type: String ,required:true},
      attributes: { type: String,required:true }
  },
  { timestamps: true }
);
const ProductModel = mongoose.model("product", ProductSchema);

export default ProductModel;
