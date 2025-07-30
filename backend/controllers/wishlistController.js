import { Router } from "express";
import wishlistModel from "../models/wishlistModel.js";
async function wishlistProducts(req, res) {
  try {
    const { id } = req.params;
    console.log(id);
    const wishlistProduct = await wishlistModel.findById(id);
    console.log(wishlistProduct);
    res.status(200).json(wishlistProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
}
export default wishlistProducts;
