import React from "react";
import './Signup.css'
import anj_logo from "../../assets/Anj-logo.svg";
import google_logo from '../../assets/google.png'
import apple_logo from '../../assets/apple-logo.png'
import facebook_logo from '../../assets/facebook.png'
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="login">
      <img src={anj_logo} alt="" />
      <h1 className="title">Start your career <br /> journey with ANJ</h1>
      <div className="login-form">
        <h1>Sign Up</h1>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="password" required />
          <button className="btn">Sign Up</button>
        </form>
        <h4>Or Sign Up with</h4>
        <div className="social">
          <div className="google"><img src={google_logo} alt="" /></div>
          <div className="apple"> <img src={apple_logo} alt="" /></div>
          <div className="facebook"> <img src={facebook_logo} alt="" /></div>
        </div>
        <div className="form-switch">
          <p>
            Have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
