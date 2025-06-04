import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
import noimage from "/noimage.webp";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center pl-[15%]">
      <i class="text-zinc-400 text-3xl ri-search-2-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-400"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => {
            setQuery("");
          }}
          class="text-zinc-400 text-3xl ri-close-line cursor-pointer"
        ></i>
      )}

      <div className="w-[45%] max-h-[50vh] bg-[#040B29] absolute z-[99] left-1/5 top-[100%] overflow-auto rounded">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type || "movie"}/details/${s.id}`}
            key={i}
            className="hover:text-white hover:bg-[#040B39] duration-300 font-semibold text-zinc-300 w-[100%] p-5 flex justify-start items-center border-b-2 border-zinc-500"
          >
            <img
              className="h-[10vh] w-[10vh] object-cover rounded mr-5 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
