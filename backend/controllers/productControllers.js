import ProductModel from "../models/productModel.js";
// import { v2 as cloudinary } from "cloudinary";
// import cloudinary from "../config/cloudinary.js";
// function uploadCloud(buffer, folder) {
//   return new Promise((resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       { folder },
//       (err, result) => {
//         if (result) resolve(result);
//         else reject(err);
//       }
//     );
//     stream.end(buffer)
//   });
// }

export async function addProduct(req, res) {
  console.log(req.body);
  const {
    name,
    slug,
    category,
    image,
    quantity,
    originalPrice,
    discountedPrice,
    description,
    attributes,
  } = req.body;
  try {
    const imageUrl = req.file ? req.file.path : "";

    console.log(req.body);
    const ProductToAdd = new ProductModel({
      // ...req.body,
      name,
      slug,
      category,
      quantity,
      originalPrice,
      discountedPrice,
      description,
      attributes,
      image: imageUrl,
    });
    const newProduct = await ProductToAdd.save();
    res.status(201).json({
      message: "Product data added",
      product: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
}

export async function getAllProducts(req, res) {
  try {
    // console.log(req.body);
    const getAllProducts = await ProductModel.find();
    console.log(getAllProducts);

    res.status(200).json(getAllProducts); //isse postman pr data jata h
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
}

export async function getSingleProducts(req, res) {
  try {
    // console.log(req.params);
    const { id } = req.params;
    // console.log(req.file);

    const getSingleProducts = await ProductModel.findById(id);
    //   console.log(getSingleProducts);

    res.status(200).json(getSingleProducts);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
}
