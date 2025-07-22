import registerModel from "../models/registerModel.js";

export async function addUser(req,res){
    try {
        console.log(req.body);
        const RegisterUserToAdd=new registerModel({
            ...req.body,
        })
        await RegisterUserToAdd.save();
        res.status(200).send(" User Data added")
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
        
    }
}