import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from "./Loader";
import HorizontalCards from "./partials/HorizontalCards";

const MovieDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  console.log(info);
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat ",
      }}
      className="relative w-screen h-fit py-2 px-[10%]"
    >
      <nav className="w-full h-[7vh] text-zinc-100 flex items-center gap-10 text-2xl">
        <Link
          onClick={() => navigate(-1)}
          class="ri-arrow-left-line text-zinc-400  text-2xl mr-2 hover:text-[#483AA0]"
        ></Link>
        <a target="_blank" href={info.details.homepage}>
          <i class="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i class="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          imdb
        </a>
      </nav>

      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.8)] h-[60vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.details.poster_path || info.details.backdrop_path
          }`}
          alt=""
        />
        <div className="content ml-[5%] text-white">
          <h1 className="text-4xl  font-black">
            {info.details.name ||
              info.details.title ||
              info.details.original_name ||
              info.details.original_title}
            <small className="text-2xl font-bold text-zinc-200 ml-1">
              ({info.details.release_date.split("-")[0]})
            </small>
          </h1>
          <div className="flex mt-3 mb-3  items-center gap-x-3">
            <span className=" rounded-full text-md font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
              {(info.details.vote_average * 10).toFixed()}
              <sup>%</sup>
            </span>
            <h1 className="w-[60px] leading-5 font-semibold text-xl">
              User Score
            </h1>
            <h1>{info.details.release_date}</h1>
            <h1>{info.details.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.details.runtime}min</h1>
          </div>
          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.details.tagline}
          </h1>
          <h1 className="text-xl mt-2 ">Overview</h1>
          <p className="">{info.details.overview}</p>
          <h1 className="text-xl mt-2 ">Movie Translateds</h1>
          <p className="mb-6">{info.translations.join(", ")}</p>
          <Link
            to={`${pathname}/trailer`}
            className="py-3 px-6 bg-[#483AA0] text-white rounded-md hover:bg-[#5a3bb1]"
          >
            <i class="text-xl mr-3 ri-play-fill"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      <div className="w-[80%] flex flex-col gap-y-3 mt-5">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-2 items-center text-white">
            <h1>Available on Platform</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-2 items-center text-white">
            <h1>Available on Rent {"\u00A0\u00A0\u00A0\u00A0\u00A0"}</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-2 items-center text-white">
            <h1>Available on Buy {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
      <hr className="mt-8 mb-5 border-none h-[1px] bg-zinc-400" />
      <h1 className="text-3xl pl-4 font-semibold text-white">
        Recommendations & Similar stuff
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
};

export default MovieDetails;
