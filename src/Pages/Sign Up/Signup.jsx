import React, { useState } from "react";
import anj_logo from "../../assets/Anj-logo.svg";
import google_logo from "../../assets/google.png";
import apple_logo from "../../assets/apple-logo.png";
import facebook_logo from "../../assets/facebook.png";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isAuthenticated", true);
    localStorage.setItem("userName", name);

    alert("Signup successful!");
    navigate("/home");
  };

  return (
    <div className="p-9">
      <img
        className=" w-[8.5rem] cursor-pointer ml-5 sm:ml-10"
        src={anj_logo}
        alt=""
      />
      <h1 className="font-poppins text-[#07038c] text-center text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium uppercase mb-10 sm:mb-20 lg:mb-35 mt-10 sm:mt-16 lg:mt-20">
        {" "}
        Start your career <br /> journey with anj
      </h1>
      <div className="max-w-[28rem] mt-20 mx-auto">
        <h1 className="text-center text-2xl font-bold mb-10 text-[#07038c] uppercase font-poppins">
          Sign Up
        </h1>
        <form onSubmit={handelSignUp}>
          <input
            className="w-[100%] border border-blue-900 h-[60px] my-3 rounded-md p-5 text-base font-normal"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-[100%] border border-blue-900 h-[60px] my-3 rounded-md p-5 text-base font-normal"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-[100%] border border-blue-900 h-[60px] my-3 rounded-md p-5 text-base font-normal"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full border-none outline-none py-4 bg-[#07038c] text-white rounded-md text-lg font-medium mt-4 hover:bg-[#2823b4] cursor-pointer">
          Sign Up
          </button>
        </form>
        <h4 className="flex items-center w-full font-poppins font-light text-[#383838] my-6">
          <span className="flex-1 border-b border-black mr-2"></span>Or Sign Up
          with<span className="flex-1 border-b border-black ml-2"></span>
        </h4>
        <div className=" flex flex-row gap-2 justify-center sm:gap-6" >
          {" "}
          <div className="flex flex-col items-center border border-gray-300 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-100 sm:px-10">
            {" "}
            <img src={google_logo} alt="" className="w-12 mx-7 " />
          </div>
          <div className="flex flex-col items-center border border-gray-300 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-100 sm:px-10">
            {" "}
            <img src={apple_logo} alt="" className="w-12 mx-7" />
          </div>
          <div className="flex flex-col items-center border border-gray-300 rounded-md px-3 py-2 cursor-pointer hover:bg-gray-100 sm:px-10">
            {" "}
            <img src={facebook_logo} alt="" className="w-12 mx-7" />
          </div>
        </div>
        <div className="form-switch mt-10 text-gray-500 text-center font-poppins">
          <p>
            Have an account?{" "}
            <Link
              className="text-[#07038c] font-medium hover:text-blue-900 ml-2"
              to="/"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
