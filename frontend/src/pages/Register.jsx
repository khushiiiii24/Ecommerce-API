import React, { useState } from "react";
import sideImage from "../assets/sideImage.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
function Register() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image:"",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    try {
        const response=await axios.post("http://localhost:4000/user/register",formData,{withCredentials:true})
        console.log(response);
        navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="login-container">
      {/* Left side image section */}
      <div className="login-left">
        <img src={sideImage} alt="Illustration" className="login-image" />
      </div>

      {/* Right side registration form */}
      <div className="login-right">
        <h2 className="login-title">Create an Account</h2>
        <p className="login-subtitle">Register with your details below</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="login-input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="login-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

           <input
            type="file"
            className="login-input"
            name="image"
            accept="image/*"
            onChange={handleChange}

            // required
          /> 

          <input
            type="password"
            placeholder="Password"
            className="login-input"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>

        <p className="signup-link">
          Already have an account? <Link to="/">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
