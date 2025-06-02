import React from "react";
import { Link, Links } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-5">
      <h1 className="text-2xl flex justify-center items-center gap-2 font-bold">
        <img className="w-8 h-8" src="icon.svg"></img>
        <span className="  text-white">Movies Website</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-10">New Feeds</h1>
        <Link
          to="/trending"
          className="hover:bg-[#483AA0] hover:text-white p-3 rounded-lg duration-300"
        >
          <i class="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#483AA0] hover:text-white p-3 rounded-lg duration-300"
        >
          <i class="ri-bard-fill mr-2"></i>
          Popular
        </Link>
        <Link
          to="/movies"
          className="hover:bg-[#483AA0] hover:text-white p-3 rounded-lg duration-300"
        >
          <i class="ri-movie-2-line mr-2"></i>
          Movies
        </Link>
        <Link
          to="/tvShows"
          className="hover:bg-[#483AA0] hover:text-white p-3 rounded-lg duration-300"
        >
          <i class="ri-tv-fill mr-2"></i>
          Tv show
        </Link>
        <Link
          to="/people"
          className="hover:bg-[#483AA0] hover:text-white p-3 rounded-lg duration-300"
        >
          <i class="ri-team-fill mr-2"></i>
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 mt-3" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-5 ">
          Website Information
        </h1>
        <Link className="hover:bg-[#483AA0] hover:text-white p-3 rounded-lg duration-300">
          <i class="ri-information-2-fill mr-2"></i>
          About
        </Link>
        <Link className="hover:bg-[#483AA0] hover:text-white p-3 rounded-lg duration-300">
          <i class="ri-phone-fill mr-2"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
