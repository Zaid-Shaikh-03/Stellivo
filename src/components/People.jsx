import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const People = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "Person | Movies Website";

  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/popular?page=${page}`);
      if (data.results.length > 0) {
        setPerson((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };

  const refershHandler = () => {
    if (person.length == 0) {
      GetPerson();
    } else {
      setPage(1);
      setPerson([]);
      GetPerson();
    }
  };

  useEffect(() => {
    refershHandler();
  }, []);
  console.log(person);

  return person.length > 0 ? (
    <div className="w-screen  h-screen ">
      <div className="px-[5%] py-2 mb-[3%] w-full flex items-center justify-between ">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            class="ri-arrow-left-line text-zinc-400  text-2xl mr-2 hover:text-[#483AA0]"
          ></i>
          People
        </h1>
        <div className="flex items-center w-[80%]">
          <Topnav />
        </div>
      </div>

      <InfiniteScroll
        loader={<h1>Loading</h1>}
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
      >
        <Cards data={person} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default People;
