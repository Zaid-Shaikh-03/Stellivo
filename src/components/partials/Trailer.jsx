import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageNotFound from "../PageNotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideos = useSelector((state) => state[category].info.videos);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="bg-[#020617c5] absolute z-[999] top-0 left-0 w-screen h-screen flex items-center justify-center text-white">
      <Link
        onClick={() => navigate(-1)}
        className="absolute top-7 right-10 ri-close-fill text-zinc-100  text-5xl mr-2 hover:text-[#ff0000]"
      ></Link>
      {ytvideos ? (
        <ReactPlayer
          controls
          height={700}
          width={1300}
          url={`https://www.youtube.com/watch?v=${ytvideos.key}`}
        ></ReactPlayer>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default Trailer;
