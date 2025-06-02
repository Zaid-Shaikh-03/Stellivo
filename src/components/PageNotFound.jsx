import React from "react";
import notFound from "/notFound.gif";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-2 text-white">
      <img className="w-1/4" src={notFound} alt="" />
      <h1 className="font-black text-4xl">Oops, 404! Page not found.</h1>
      <p className="text-zinc-200 text-xl">Go back to Home Page</p>
      <Link to="/" className="bg-[#483AA0] px-6 py-3 text-xl rounded">
        Home
      </Link>
    </div>
  );
};

export default PageNotFound;
