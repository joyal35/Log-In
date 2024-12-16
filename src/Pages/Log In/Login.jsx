import React, { useState } from "react";
import './Login.css'
import anj_logo from "../../assets/Anj-logo.svg";
import google_logo from '../../assets/google.png'
import apple_logo from '../../assets/apple-logo.png'
import facebook_logo from '../../assets/facebook.png'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate =useNavigate()

  const handleLogin = (e) =>{
    e.preventDefault();

    const users=JSON.parse(localStorage.getItem("users")) || []
    const user = users.find((user)=> user.email === email && user.password === password)

  if(user){
    localStorage.setItem("isAuthenticated",true)
    localStorage.setItem("userName",user.name)
    alert("Login successful!")
    navigate("/home")
  }else{
    alert("Invaild user")
  }

  

  }
  return (
    <div className="login">
      <img src={anj_logo} alt="" />
      <h1 className="title">Start your career <br /> journey with ANJ</h1>
      <div className="login-form">
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <input id="myInput" type="email" placeholder="Email" value={email} onChange={(e) =>setEmail(e.target.value)} required />
          <input type="password" placeholder="password" value={password} onChange={(e) =>setPassword(e.target.value)} required />
          <button className="btn">Log In</button>
        </form>
        <h4>Or Sign In with</h4>
        <div className="social">
          <div className="google"><img src={google_logo} alt="" /></div>
          <div className="apple"> <img src={apple_logo} alt="" /></div>
          <div className="facebook"> <img src={facebook_logo} alt="" /></div>
        </div>
        <div className="form-switch">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
