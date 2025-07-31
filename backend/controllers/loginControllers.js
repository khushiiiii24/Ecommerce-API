// import LoginModel from "../models/loginModel.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
  console.log(req.body);
  
  const user = await userModel.findOne({ email });
  console.log(user);
  
  if (!user) {
    return res.status(400).json({ message: "user not found" });
  }

  const matched = await bcrypt.compare(password, user.password);
  if (!matched) {
    return res.status(401).json({ message: "user not Logged in" });
  }

  const token = jwt.sign({ id: user._id ,email:user.email}, process.env.JWT_SECRETE, {
    expiresIn: "1d",
  });

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 3600000,
    })
    .send({
      message: "user login succesfully",
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("login token error: ",error);
    
  }
  
}
