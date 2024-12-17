import React from "react";
import no_jobs from "../../assets/no_content.png";

const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userName");
    window.location.href = "/";
  };
  return (
    <div>
      <div className="flex flex-row justify-end ">
        <button
          className="mx-11 p-2 my-5 rounded-md w-20 bg-Anj-color text-white"
          onClick={handleLogout}>
          Log Out
        </button>
      </div>
      <div className="flex flex-col items-center">
        <img className="size-[30rem] " src={no_jobs} alt="" />
        <p className="text-gray-500 text-xl">No Jobs Available</p>
      </div>
    </div>
  );
};

export default Home;
