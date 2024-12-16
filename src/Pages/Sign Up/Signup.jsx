import React, { useState } from "react";
import "./Signup.css";
import anj_logo from "../../assets/Anj-logo.svg";
import google_logo from "../../assets/google.png";
import apple_logo from "../../assets/apple-logo.png";
import facebook_logo from "../../assets/facebook.png";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handelSignUp = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
    }

    const users = JSON.parse(localStorage.getItem("user")) || [];
    const userExit = users.some((user) => user.email === email);
    if (userExit) {
      alert("This email is alredy exist");
    }

    users.push({ name, email, password });
    localStorage.setItem("users",JSON.stringify(users))
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("userName",name)

    alert("Signup successful!")
    navigate("/home"); 
  };

  return (
    <div className="login">
      <img src={anj_logo} alt="" />
      <h1 className="title">
        Start your career <br /> journey with ANJ
      </h1>
      <div className="login-form">
        <h1>Sign Up</h1>
        <form onSubmit={handelSignUp}>
          <input type="text" placeholder="Name" value={name} onChange={(e) =>setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) =>setEmail(e.target.value)} required />
          <input type="password" placeholder="password" value={password} onChange={(e) =>setPassword(e.target.value)} required />
          <button className="btn">Sign Up</button>
        </form>
        <h4>Or Sign Up with</h4>
        <div className="social">
          <div className="google">
            <img src={google_logo} alt="" />
          </div>
          <div className="apple">
            {" "}
            <img src={apple_logo} alt="" />
          </div>
          <div className="facebook">
            {" "}
            <img src={facebook_logo} alt="" />
          </div>
        </div>
        <div className="form-switch">
          <p>
            Have an account? <Link to="/">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
