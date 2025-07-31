import React, { useState } from "react";
import sideImage from "../assets/sideImage.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate=useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    const{name,value}=e.target
    setLoginData((prev)=>({
      ...prev,[name]:value
    }))
  }
 async function handleSubmit(e) {
    e.preventDefault();
    console.log("login data successfully: ", loginData);
    try {
      const response=await axios.post("http://localhost:4000/user/login",loginData,{withCredentials:true})
      console.log(response);
      navigate("/home")
    } catch (error) {
     console.log(error);
      
    }
  }
  return (
    <div className="login-container">
      {/* Left image section */}
      <div className="login-left">
        <img
          src={sideImage}
          alt="Shopping Illustration"
          className="login-image"
        />
      </div>

      {/* Right form section */}
      <div className="login-right">
        <h2 className="login-title">Log in to Exclusive</h2>
        <p className="login-subtitle">Enter your details below</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className="login-input"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />

          <div className="login-actions">
            <button type="submit" className="login-button">
              Log In
            </button>
            <a href="#" className="forgot-password">
              Forget Password?
            </a>
          </div>
        </form>

        <p className="signup-link">
          Don’t have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
