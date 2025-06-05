import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from "./Loader";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

const PersonDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("movie");
  // console.log(info);
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);
  return info ? (
    <div className="px-[8%] w-screen bg-[#020617] h-fit py-5 relative">
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-2xl">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line text-zinc-400  text-2xl mr-2 hover:text-[#483AA0]"
        ></Link>
      </nav>
      <div className="w-full flex ">
        <div className="w-[20%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,0.8)] h-[45vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              info.details.profile_path || info.details.backdrop_path
            }`}
            alt=""
          />
          <hr className="mt-8 mb-5 border-none h-[1px] bg-zinc-400" />
          <div className="text-2xl text-white flex gap-x-7">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            {info.externalid.twitter_id && (
              <a
                target="_blank"
                href={`https:/x.com/${info.externalid.twitter_id}`}
              >
                <i className="ri-twitter-x-fill"></i>
              </a>
            )}
          </div>
          <h1 className="text-2xl text-zinc-400 my-5 font-semibold">
            Person info
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Known for</h1>
          <h1 className="text-lg text-zinc-400">
            {info.details.known_for_department}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className="text-lg text-zinc-400">
            {info.details.gender === 2 ? "male" : "female"}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Birthday</h1>
          <h1 className="text-lg text-zinc-400">{info.details.birthday}</h1>
          {info.details.deathday && (
            <>
              <h1 className="text-lg text-zinc-400 font-semibold mt-3">
                Deathday
              </h1>
              <h1 className="text-lg text-zinc-400">{info.details.deathday}</h1>
            </>
          )}
          {info.details.place_of_birth && (
            <>
              <h1 className="text-lg text-zinc-400 font-semibold mt-3">
                Place of Birth
              </h1>
              <h1 className="text-lg text-zinc-400">
                {info.details.place_of_birth}
              </h1>
            </>
          )}
          {info.details.place_of_birth && (
            <>
              <h1 className="text-lg text-zinc-400 font-semibold mt-3">
                Also Known as
              </h1>
              <h1 className="text-lg text-zinc-400">
                {info.details.also_known_as.join(", ")}
              </h1>
            </>
          )}
        </div>
        <div className="w-[80%] ml-[3%]">
          <h1 className="text-6xl text-zinc-400 mb-5 font-black">
            {info.details.name}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Overview</h1>
          <p className="text-zinc-400 mt-3">{info.details.biography}</p>
          <h1 className="text-lg text-zinc-400 font-semibold mt-5">
            known for
          </h1>
          <HorizontalCards data={info.combinedCredits.cast} />
          <div className="w-full flex justify-between mt-5">
            <h1 className="text-xl text-zinc-400 font-semibold">Acting</h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="list-disc text-zinc-400 w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl  shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5 mt-5">
            {info[category + "Credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-white duration-300 cursor-pointer rounded hover:bg-[#050D30] p-5 "
              >
                <Link to={`/${category}/details/${c.id}`} className="">
                  <span>
                    {c.name || c.title || c.original_name || c.original_title}
                  </span>
                  <span className="block ml-5 mt-2">
                    {c.character && `Character Name: ${c.character}`}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default PersonDetails;
