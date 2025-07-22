import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    slug: { type: String },
    category: {
      type: String,
    },
    images: {
      // primary: {
      //   type: String,
      // },
      // secondary: {
      //   type: String,
      // },
      type:String
    },
    quantity: { type: Number },
    originalPrice: { type: Number },
    discountedPrice: { type: Number },
    description: { type: String },
      attributes: { type: String }
  },
  { timestamps: true }
);
const ProductModel = mongoose.model("product", ProductSchema);

export default ProductModel;
