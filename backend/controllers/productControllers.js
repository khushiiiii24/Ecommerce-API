import ProductModel from "../models/productModel.js";

export async function addProduct(req,res) {
    try {
        console.log(req.body);
        const ProductToAdd= new ProductModel({
            ...req.body,
        });
        await ProductToAdd.save();
        res.status(200).send("Product data added");
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
        
    }
}