import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

const Movies = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "Movies | Movies Website";

  const GetMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovies((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const refershHandler = () => {
    if (movies.length == 0) {
      GetMovies();
    } else {
      setPage(1);
      setMovies([]);
      GetMovies();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return movies.length > 0 ? (
    <div className="w-screen  h-screen ">
      <div className="px-[5%] py-2 mb-[3%] w-full flex items-center justify-between ">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            class="ri-arrow-left-line text-zinc-400  text-2xl mr-2 hover:text-[#483AA0]"
          ></i>
          Movies
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        loader={<h1>Loading</h1>}
        dataLength={movies.length}
        next={GetMovies}
        hasMore={hasMore}
      >
        <Cards data={movies} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Movies;
