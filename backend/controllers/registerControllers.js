import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function registerUser(req, res) {
  const { name, email, password } = req.body;

  const userExist = await userModel.findOne({ email });
  if (userExist) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });
  console.log(newUser);

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRETE, {
    expiresIn: "1d",
  });

  res
    .cookie("generatedToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict", // typo fixed from `samSite`
      maxAge: 36000,
    })
    .send({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
}
