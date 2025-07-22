import LoginModel from "../models/loginModel.js";

export async function checkLogin(req,res){
    try {
        console.log(req.body);
        const LoginUser=new LoginModel({
            ...req.body
        })
        await LoginUser.save();
        res.status(200).send("Login successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}