// import LoginModel from "../models/loginModel.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function loginUser(req, res) {
  const { email, password } = req.body;
//   console.log(req.body);
  
  const user = await userModel.findOne({ email });
  console.log(user);
  
  if (!user) {
    return res.status(400).json({ message: "user not found" });
  }

  const matched = await bcrypt.compare(password, user.password);
  if (!matched) {
    return res.status(401).json({ message: "user not Logged in" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRETE, {
    expiresIn: "1d",
  });

  res
    .cookie("generatedToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 36000,
    })
    .send({
      message: "user login succesfully",
      user: {
        id: user._id,
        email: user.email,
      },
    });
}
