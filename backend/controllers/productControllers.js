import ProductModel from "../models/productModel.js";
// import id from useParam
// export async function addProduct(req,res) {
//     try {
//         console.log(req.body);
//         const ProductToAdd= new ProductModel({
//             ...req.body,
//         });
//         await ProductToAdd.save();
//         res.status(200).send("Product data added");
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({message:error.message})
        
//     }
// }

export async function getAllProducts(req,res) {
    try {
        // console.log(req.body);
        const getAllProducts= await ProductModel.find();
        console.log(getAllProducts);
        
        res.status(200).json(getAllProducts); //isse postman pr data jata h 
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message})
        
    }
}

export async function getSingleProducts(req,res) {
    try {
        // console.log(req.params);
        const {id}=req.params
        // console.log(req.file);
        
        const getSingleProducts= await ProductModel.findById(id);
    //   console.log(getSingleProducts);
      
        res.status(200).json(getSingleProducts);
        
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
        
    }
}