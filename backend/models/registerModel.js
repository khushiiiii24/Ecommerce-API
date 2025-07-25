import mongoose from "mongoose";
const RegisterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    image: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const RegisterModel = mongoose.model("register", RegisterSchema);
export default RegisterModel;
