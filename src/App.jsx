import React from "react";
import { Route, Routes,Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Log In/Login";
import Signup from "./Pages/Sign Up/Signup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
