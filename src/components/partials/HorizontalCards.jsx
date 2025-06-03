import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full  flex overflow-y-hidden p-5">
      {data.map((d, i) => (
        <Link
          to={`/${d.media_type}/details/${d.id}`}
          key={i}
          className="min-w-[15%]  mr-5 mb-5 bg-[#040B29] rounded"
        >
          <img
            className="w-full h-[55%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.poster_path
            }`}
            alt=""
          />
          <div className="p-3 text-white h-[45%] overflow-hidden">
            <h1 className="text-lg font-semibold ">
              {d.name || d.title || d.original_name || d.original_title}
            </h1>
            <p className="">
              {d.overview.slice(0, 50)}...
              <span className="text-zinc-500">more</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;
