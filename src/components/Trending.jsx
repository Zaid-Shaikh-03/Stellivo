import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
      //   setTrending(data.results);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const refershHandler = () => {
    if (trending.length == 0) {
      GetTrending();
    } else {
      setPage(1);
      setTrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen  h-screen ">
      <div className="px-[5%] py-2 mb-[3%] w-full flex items-center justify-between ">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            class="ri-arrow-left-line text-zinc-400  text-2xl mr-2 hover:text-[#483AA0]"
          ></i>
          Trending
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["all", "movie", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        loader={<h1>Loading</h1>}
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};
export default Trending;
