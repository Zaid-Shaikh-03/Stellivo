import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");

  console.log(query);

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

      <div className="w-[50%] max-h-[50vh] bg-red-200 absolute top-[90%] overflow-auto rounded">
        {/* <Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img src="" alt="" />
          <span>hello everyone </span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;
