import { Router } from "express";
import cartModel from "../models/cartModel.js";
async function cartProducts(req, res) {
  try {
    console.log(req.body);
    const cartProduct=new cartModel({
      ...req.body
    })
    await cartProduct.save();
    console.log(cartProduct);
    
    res.status(200).send("cart successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
}
export default cartProducts;
