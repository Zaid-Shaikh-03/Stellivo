import React from "react";
import Sidebar from "./partials/Sidebar";
import Topnav from "./partials/Topnav";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="w-[80%] h-full">
        <Topnav />
      </div>
    </>
  );
};

export default Home;
