import React, { useState, useEffect } from "react";
import axios from "../utils/axios";
import Sidebar from "./partials/Sidebar";
import Topnav from "./partials/Topnav";
import Header from "./partials/Header";

const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (e) {
      console.log("Error:", e);
    }
  };

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
  }, []);

  return wallpaper ? (
    <>
      <Sidebar />
      <div className="w-[80%] h-full">
        <Topnav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default Home;
